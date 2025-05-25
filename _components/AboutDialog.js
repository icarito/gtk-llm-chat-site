import GtkWindow from "./GtkWindow";

const icon = "images/org.fuentelibre.gtk_llm_Chat.svg";

function AboutDialog() {
    return (
        <GtkWindow>
            <center>
                <br></br>
                <img src={icon} alt="Gtk LLM Chat Robot Icon" width="100" height="100" />
                <div class="header">Gtk LLM Chat</div>
                <div class="text">Sebastian Silva</div>
                <div>
                    <button class="btn">v3.0.0</button>
                </div>
            </center>
            <div class="linked vertical">
                <button class="btn">Details</button>
            </div>
            <div class="linked vertical">
                <button class="btn">Credits</button>
                <button class="btn">Legal</button>
            </div>
        </GtkWindow>
    );
}

export default AboutDialog;
