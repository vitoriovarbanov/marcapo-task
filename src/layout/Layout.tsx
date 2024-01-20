import Navigation from '@app/components/Navigation';

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => (
    <div>
        <Navigation />
        <main>{children}</main>
    </div>
);

export default Layout;
