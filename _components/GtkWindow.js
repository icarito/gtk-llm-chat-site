// import winbox
import wb from 'https://esm.run/react-winbox';

let WinBox = wb.default;

// import 'node_modules/winbox/dist/css/winbox.min.css';

function GtkWindow() {
    return (
      <WinBox
        width={500}
        height={300}
        x="center"
        y="center"
        title="Hello, WinBox!"
      >
              <div class="dialog">
                <div class="dialog-header">New Conversation
                  <button class="btn btn-close" type="button"></button>  
                </div>
                <div class="dialog-body">
                  <span class="text">This is the dialog content.</span>
                </div>
              </div>
      </WinBox>
    );
  }

export default GtkWindow;
