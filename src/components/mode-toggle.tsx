import { useTheme } from "@/components/theme-provider";
import assets from "@/assets/assets";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button className="cursor-pointer">
        {theme == "dark" ? (
          <img src={assets.sun_icon} alt="" onClick={() => setTheme("light")} />
        ) : (
          <img src={assets.moon_icon} alt="" onClick={() => setTheme("dark")} />
        )}
      </button>
    </>
  );
}
