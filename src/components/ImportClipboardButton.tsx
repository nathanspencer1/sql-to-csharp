import React, { FunctionComponent } from 'react'

interface ImportClipboardButtonProps {
    onImport: (importedText: string) => void;
}

const ImportClipboardButton: FunctionComponent<ImportClipboardButtonProps> = ({onImport}): JSX.Element => {
    const handleClipboardImport = async () => {
        const text = await navigator.clipboard.readText();
        onImport(text);
    };

    return (
        <div>
          <button id="button-3" className="button-3" onClick={handleClipboardImport}>Import Clipboard</button>
      </div>
    );
}

export default ImportClipboardButton