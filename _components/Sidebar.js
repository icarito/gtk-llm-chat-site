import AboutDialog from "./AboutDialog";

function Sidebar() {

    const [windows, setWindows] = React.useState([]);

    function showAboutDialog() {
        const aboutDialog = new AboutDialog();
        setWindows([...windows, aboutDialog]);
    }

    return (<div class="dialog ad-card">
        <div class="linked vertical">
            <button class="btn">Details</button>
        </div>
        <div class="linked vertical">
            <button class="btn">Credits</button>
            <button class="btn" onClick={showAboutDialog}>About</button>
        </div>
        {windows.map((window, index) => (
            <div key={index}>
                {window}
            </div>
        ))}
    </div>
    );
}

export default Sidebar;
