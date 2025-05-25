// import winbox
import wb from 'https://esm.run/react-winbox';

let WinBox = wb.default;

function GtkWindow({title, children}) { // Añadir children a las props desestructuradas
    return (
      <WinBox
        width={300}
        height={450}
        x="center"
        y="center"
        title={title}
        noMin noMax noFull
        className="dialog dialog-header"
      >
                <div className="dialog-body">
                  {children} {/* Renderizar el contenido hijo aquí */}
                </div>
      </WinBox>
    );
  }

export default GtkWindow;
