import React, { useState } from "react";
import { Upload, Check, X, Camera, RefreshCw } from "lucide-react";

export interface TeamMemberInfo {
  id: string;
  name: string;
  role: string;
  defaultImage: string;
}

interface TeamPhotoManagerProps {
  members: TeamMemberInfo[];
  onPhotosUpdated: () => void;
}

export function TeamPhotoManager({ members, onPhotosUpdated }: TeamPhotoManagerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<{ name: string; dataUrl: string }[]>([]);
  const [assignment, setAssignment] = useState<Record<string, string>>({});
  const [isSaving, setIsSaving] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    const newItems: { name: string; dataUrl: string }[] = [];
    const readers: Promise<void>[] = [];

    Array.from(files).forEach((file) => {
      if (!file.type.startsWith("image/")) return;
      const promise = new Promise<void>((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target?.result) {
            newItems.push({
              name: file.name,
              dataUrl: e.target.result as string,
            });
          }
          resolve();
        };
        reader.readAsDataURL(file);
      });
      readers.push(promise);
    });

    Promise.all(readers).then(() => {
      setUploadedFiles((prev) => {
        const combined = [...prev, ...newItems];
        // Auto-assign in order if slots are empty
        const newAssignment = { ...assignment };
        combined.forEach((item, index) => {
          const member = members[index];
          if (member && !newAssignment[member.id]) {
            newAssignment[member.id] = item.dataUrl;
          }
        });
        setAssignment(newAssignment);
        return combined;
      });
      setStatusMessage(`Loaded ${newItems.length} photo(s). Select or drag to match each team member.`);
    });
  };

  const handleSave = async () => {
    setIsSaving(true);
    setStatusMessage("Saving headshots to studio storage...");
    try {
      for (const member of members) {
        const dataUrl = assignment[member.id];
        if (dataUrl) {
          // 1. Save to local storage for instant browser preview
          localStorage.setItem(`luminor_team_photo_${member.id}`, dataUrl);

          // 2. Persist to server via API
          try {
            await fetch("/api/team-photos", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                memberId: member.id,
                base64Data: dataUrl,
              }),
            });
          } catch (err) {
            console.warn(`Could not sync ${member.id} to backend API:`, err);
          }
        }
      }
      setStatusMessage("All team photos updated successfully!");
      onPhotosUpdated();
      setTimeout(() => {
        setIsOpen(false);
        setStatusMessage(null);
      }, 1200);
    } catch (err) {
      console.error(err);
      setStatusMessage("Encountered an error while saving.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleResetToDefaults = () => {
    members.forEach((m) => {
      localStorage.removeItem(`luminor_team_photo_${m.id}`);
    });
    setAssignment({});
    setUploadedFiles([]);
    onPhotosUpdated();
    setStatusMessage("Reset all member photos to defaults.");
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group inline-flex items-center gap-2 rounded-full border border-[#ffbf00]/40 bg-[#1a1814] px-4 py-2 text-xs font-mono font-medium uppercase tracking-wider text-[#ffbf00] transition-all hover:border-[#ffbf00] hover:bg-[#ffbf00] hover:text-[#1a1814]"
        data-testid="open-team-photo-manager-btn"
      >
        <Camera className="size-3.5" />
        <span>Update Team Headshots ({members.length})</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-[#332f26] bg-[#1a1814] p-6 text-[#fffbf2] shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-6 top-6 rounded-full p-2 text-[#8c8474] transition hover:bg-[#2e2a22] hover:text-[#fffbf2]"
              aria-label="Close"
            >
              <X className="size-5" />
            </button>

            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-[#ffbf00]">Headshot Manager</p>
              <h3 className="mt-1 font-serif text-2xl font-bold sm:text-3xl">Apply Team Headshots</h3>
              <p className="mt-2 text-sm text-[#b9b1a2]">
                Drag & drop your 9 ChatGPT-generated portrait images below to assign them to each team member.
              </p>
            </div>

            {/* Dropzone */}
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                handleFiles(e.dataTransfer.files);
              }}
              className="mt-6 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#ffbf00]/40 bg-[#24211a] p-8 text-center transition hover:border-[#ffbf00] hover:bg-[#2b2720]"
            >
              <Upload className="size-8 text-[#ffbf00]" />
              <p className="mt-3 font-medium text-[#fffbf2]">Drag & drop all 9 images here</p>
              <p className="mt-1 text-xs text-[#8c8474]">or click to browse PNG / JPG files from your device</p>
              <label className="mt-4 inline-flex cursor-pointer items-center rounded-full bg-[#ffbf00] px-5 py-2 font-mono text-xs font-bold uppercase tracking-wider text-[#1a1814] transition hover:bg-[#e5ac00]">
                Browse Files
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleFiles(e.target.files)}
                />
              </label>
            </div>

            {statusMessage && (
              <div className="mt-4 rounded-xl border border-[#ffbf00]/30 bg-[#ffbf00]/10 p-3 text-center text-xs font-mono text-[#ffbf00]">
                {statusMessage}
              </div>
            )}

            {/* Member Mapping Grid */}
            <div className="mt-8">
              <h4 className="font-mono text-xs uppercase tracking-wider text-[#8c8474]">
                Team Member Assignments ({Object.keys(assignment).length}/{members.length})
              </h4>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {members.map((member) => {
                  const currentImage = assignment[member.id] || member.defaultImage;
                  const isAssigned = Boolean(assignment[member.id]);

                  return (
                    <div
                      key={member.id}
                      className={`relative flex items-center gap-3 rounded-2xl border p-3 ${
                        isAssigned
                          ? "border-[#ffbf00]/50 bg-[#24211b]"
                          : "border-[#332f26] bg-[#1f1c16]"
                      }`}
                    >
                      <div className="relative size-14 shrink-0 overflow-hidden rounded-full border border-[#ffbf00]/30 bg-black">
                        <img
                          src={currentImage}
                          alt={member.name}
                          className="size-full object-cover"
                        />
                        {isAssigned && (
                          <span className="absolute bottom-0 right-0 flex size-4 items-center justify-center rounded-full bg-[#ffbf00] text-[10px] text-[#1a1814]">
                            <Check className="size-2.5 stroke-[3]" />
                          </span>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-semibold text-[#fffbf2]">{member.name}</p>
                        <p className="truncate font-mono text-[10px] text-[#8c8474]">{member.role}</p>
                        {uploadedFiles.length > 0 && (
                          <select
                            aria-label={`Select photo for ${member.name}`}
                            className="mt-1 w-full truncate rounded border border-[#3d382d] bg-[#14120f] px-1.5 py-0.5 text-[10px] text-[#b9b1a2] focus:border-[#ffbf00] focus:outline-none"
                            value={assignment[member.id] || ""}
                            onChange={(e) => {
                              const val = e.target.value;
                              setAssignment((prev) => ({
                                ...prev,
                                [member.id]: val,
                              }));
                            }}
                          >
                            <option value="">Default Photo</option>
                            {uploadedFiles.map((uf, i) => (
                              <option key={i} value={uf.dataUrl}>
                                {uf.name} (Photo #{i + 1})
                              </option>
                            ))}
                          </select>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-[#332f26] pt-6 sm:flex-row">
              <button
                type="button"
                onClick={handleResetToDefaults}
                className="inline-flex items-center gap-1.5 font-mono text-xs text-[#8c8474] hover:text-[#b9b1a2]"
              >
                <RefreshCw className="size-3" /> Reset to defaults
              </button>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full border border-[#332f26] px-5 py-2 text-xs font-semibold text-[#b9b1a2] transition hover:bg-[#25221b] hover:text-[#fffbf2]"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  disabled={isSaving || Object.keys(assignment).length === 0}
                  onClick={handleSave}
                  className="inline-flex items-center gap-2 rounded-full bg-[#ffbf00] px-6 py-2 text-xs font-mono font-bold uppercase tracking-wider text-[#1a1814] shadow-md transition hover:bg-[#e5ac00] disabled:opacity-50"
                  data-testid="save-team-photos-btn"
                >
                  {isSaving ? "Saving..." : "Apply & Save Headshots"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
