import DashboardNavbar from "@/components/dashboard-navbar";

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return ( 
        <div>
            <div className="block sm:hidden bg-blue-800 p-2 text-center">
                <p className="text-xs text-primary-foreground">For the best experience, use on desktop.</p>
            </div>
            {children}
        </div>
     );
}
 
export default DashboardLayout;