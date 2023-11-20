import React, { useRef } from 'react';
import { Button } from 'primereact/button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SeverityDemo() {
  const notify = () => toast("Wow so easy!");

    return (
        <div className="card flex justify-content-center">
            <button onClick={notify}>Notify!</button>
        <ToastContainer />
        </div>
    )
}
        