import Navigation from '@app/components/Navigation';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
    <div>
        <Navigation />
        <main>{children}</main>
    </div>
);

export default Layout;
