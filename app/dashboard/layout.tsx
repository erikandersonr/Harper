import DashboardNavbar from "@/components/dashboard-navbar";

const DashboardLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return ( 
        <div>
            <div className="block sm:hidden bg-blue-800 dark:bg-blue-600 p-2 text-center">
                <p className="text-xs text-primary-foreground dark:text-primary">For the best experience, use on desktop.</p>
            </div>
            {children}
        </div>
     );
}
 
export default DashboardLayout;