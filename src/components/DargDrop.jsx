import { useState } from 'react';

const DragDrop = ({ setImage }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [isDragOver, setIsDragOver] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);
            setImage(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragOver(false);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragOver(false);

        if (e.dataTransfer.files.length) {
            const file = e.dataTransfer.files[0];
            setSelectedFile(file);
            setImage(file);

            // Simulate file input change to ensure form validation
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            document.getElementById("upload-file").files = dataTransfer.files;
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (selectedFile) {
            console.log(selectedFile);
            // Perform further actions like sending the file to the server
        } else {
            alert('Please select a file');
        }
    };

    const handleFormReset = () => {
        setSelectedFile(null);
        setImage(null);
    };

    return (
        <form className="dropzone-box shadow-2xl" onSubmit={handleFormSubmit} onReset={handleFormReset}>
            <div className={`dropzone-area ${isDragOver ? 'dropzone--over' : ''}`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}>
                {!selectedFile && (
                    <>
                        <div className="file-upload-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                                strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                            </svg>
                        </div>
                        <p>Click to upload or drag and drop</p>
                    </>
                )}
                <input type="file" required id="upload-file" name="uploaded-file" onChange={handleFileChange} />
                {selectedFile && <img src={URL.createObjectURL(selectedFile)} alt="Selected" className="preview-image" />}
                <p className="message">{selectedFile ? `${selectedFile.name}, ${selectedFile.size} bytes` : 'No Files Selected'}</p>
            </div>
        </form>
    );
};

export default DragDrop;
