export interface Car {
    id: string;
    name: string;
    tagline: string;
    generation: string;
    price: string;
    heroDescription: string;
    folderPath: string;
    themeColor: string;
    gradient: string;
    highlights: string[];
    performanceStats: { label: string; value: string }[];
    section1: { title: string; subtitle: string };
    section2: { title: string; subtitle: string };
    section3: { title: string; subtitle: string };
    section4: { title: string; subtitle: string };
    aeroSection: { title: string; description: string };
    engineSection: { title: string; description: string };
    buySection: {
        price: string;
        delivery: string;
        warranty: string;
    };
}

export const gt3rs: Car = {
    id: "992-gt3-rs",
    name: "Porsche 911 GT3 RS",
    tagline: "Born on the Track. Built for the Road.",
    generation: "992",
    price: "From $241,300",
    heroDescription: "The 911 GT3 RS offers more motorsport technology than ever before. With extreme aerodynamics and a high-revving naturally aspirated engine, it leaves compromises in the dust.",
    folderPath: "/images/gt3rs",
    themeColor: "#d50000",
    gradient: "linear-gradient(180deg, rgba(213,0,0,1) 0%, rgba(11,11,11,1) 100%)",
    highlights: [
        "4.0L Naturally Aspirated Flat-Six",
        "9,000 RPM redline",
        "Active aero with DRS",
        "Track-focused suspension setup",
        "Lightweight carbon construction",
    ],
    performanceStats: [
        { label: "Power", value: "518 hp" },
        { label: "0-60 mph", value: "3.0 s" },
        { label: "Top Track Speed", value: "184 mph" },
        { label: "Max Downforce", value: "860 kg" },
    ],
    section1: { title: "Aerodynamics", subtitle: "Defying the air, mastering the track. DRS enabled." },
    section2: { title: "Engine", subtitle: "4.0 liters of pure, unadulterated high-revving symphony." },
    section3: { title: "Lightweight", subtitle: "Carbon fiber reinforced plastic (CFRP) philosophy." },
    section4: { title: "Motorsport DNA", subtitle: "Direct from the 911 GT3 R race car." },
    aeroSection: {
        title: "Extreme Aerodynamics",
        description: "The central radiator concept and active aerodynamic elements define the car's aggressive stance and unparalleled cornering speed. The drag reduction system (DRS) allows you to achieve maximum speed on the straight."
    },
    engineSection: {
        title: "High-Revving Heart",
        description: "At the core lies the 4.0-liter naturally aspirated boxer engine. Optimized with aggressive cam profiles and a rigid valve train to endure 9,000 RPM lap after lap."
    },
    buySection: {
        price: "From $241,300",
        delivery: "Consult Local Dealer",
        warranty: "4 Years / 50,000 Miles",
    }
};
