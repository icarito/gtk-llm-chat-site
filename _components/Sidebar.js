import AboutDialog from "./AboutDialog";

function Sidebar() {

    const [windows, setWindows] = React.useState([]);

    function showAboutDialog() {
        const aboutDialog = new AboutDialog();
        setWindows([...windows, aboutDialog]);
    }

    return (
        <div className="nav-sidebar">
            <div className="dialog ad-card">
                <div className="text">Have AI at hand.</div>
                <div className="label">In your terms.</div>
                <div className="linked vertical">
                    <button className="btn">Details</button>
                </div>
                <div className="linked vertical">
                    <button className="btn">Credits</button>
                    <button className="btn" onClick={showAboutDialog}>About</button>
                </div>
                {windows.map((window, index) => (
                    <div key={index}>
                        {window}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
