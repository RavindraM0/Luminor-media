import howWeWorkImg from "@/assets/images/how_we_work_transparent.png";

export function HowWeWorkGraphic() {
  return (
    <div className="w-full relative flex items-center justify-center" data-testid="how-we-work-graphic">
      <img
        src={howWeWorkImg}
        alt="How We Work: 01 Discover, 02 Strategize, 03 Create, 04 Publish, 05 Optimize"
        className="w-full h-auto object-contain block bg-transparent"
        loading="lazy"
      />
    </div>
  );
}

export default HowWeWorkGraphic;
