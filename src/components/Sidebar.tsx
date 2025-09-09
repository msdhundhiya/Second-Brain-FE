import { Logo } from "../assets/icons/Logo";
import { Twitter } from "../assets/icons/twitter";
import { SidebarItem } from "./SidebarItem";
import { Youtube } from "../assets/icons/youtube";

export function Sidebar() {
    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 pl-6">
        <div className="flex text-2xl pt-8 items-center">
            <div className="pr-2 text-blue-700">
                <Logo size="md"/>
            </div>
            Second Brain
        </div>
        <div className="pt-8 pl-4">
            <SidebarItem text="Twitter" icon={<Twitter size="md" />} />
            <SidebarItem text="Youtube" icon={<Youtube size="md" />} />
        </div>
    </div>
}