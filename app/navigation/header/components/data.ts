interface MenuItems {
    id: string;
    name: string;
    href: string;
    icon?: string;
}
//NEW IN

export const menuItems: MenuItems[] = [
    { id: "FURNITURE", name: "FURNITURE", href: "/" },
    { id: "LIGHTING", name: "LIGHTING", href: "/s" },
    { id: "logoId", name: "", href: "/suyi", icon: "/img/logo.png" },
    { id: "HOME DECOR", name: "HOME DECOR", href: "/s" },
    { id: "OUTLET", name: "OUTLET", href: "/s" },
];
