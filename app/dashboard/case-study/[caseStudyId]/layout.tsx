import ChatNavbar from "@/components/chat-navbar";

const ChatLayout = ({
    children
}: {
    children: React.ReactNode
}) => {
    return ( 
        <div>
            <ChatNavbar />
            {children}
            <div className="lg:sticky dark:bg-[#121212] lg:bottom-0 pb-6 lg:pt-4">
                <h1 className="text-center text-muted-foreground text-xs">By using Harper, you agree to our <span className="hover:underline cursor-pointer">Privacy Policy</span> and <span className="hover:underline cursor-pointer">Terms of Service</span>.</h1>
            </div>
        </div>
     );
}
 
export default ChatLayout;