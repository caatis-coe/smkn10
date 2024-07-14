import React from 'react';
import Modal from './Modal';

function ModalConfirmation({ isOpen, onRequestClose, onConfirm, message, headerMessage }) {
    return (
        <Modal show={isOpen} onClose={onRequestClose}>
            <div className='p-8'>
                <header className="mb-4">
                    <h2 className="text-xl font-semibold text-gray-900">Are you sure you want to delete {headerMessage}?</h2>
                    <pre className="mt-4 text-sm text-gray-600 whitespace-pre-wrap" style={{ fontFamily: 'inherit' }}>
                        {message ?? "This will permanently delete the data"}
                    </pre>
                </header>
                <div className="text-right">
                    <button
                        onClick={onRequestClose}
                        className="bg-gray-100 py-2 px-4 w-20 text-gray-800 rounded transition-all hover:bg-gray-200 mr-2 text-sm"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="bg-blue-500 py-2 px-4 w-20 text-white rounded shadow transition-all hover:bg-blue-400 text-sm"
                    >
                        Ok
                    </button>
                </div>
            </div>
        </Modal>
    );
}

export default ModalConfirmation;