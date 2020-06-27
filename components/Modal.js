import React from 'react';

const Modal = () => {
  const closeButton = React.createRef();

  const handleModalSubmit = () => {
    alert('Sure about submitting?');
    closeButton.click();
  };

  return (
    <div className='modal-parent'>
      <button
        type='button'
        className='btn btn-primary'
        data-toggle='modal'
        data-target='#exampleModalCenter'
      >
        Add a movie
      </button>

      <div
        className='modal fade'
        id='exampleModalCenter'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='exampleModalCenterTitle'
        aria-hidden='true'
      >
        <div className='modal-dialog modal-dialog-centered' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLongTitle'>
                Modal title
              </h5>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>...</div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                data-dismiss='modal'
                ref={closeButton}
              >
                Close
              </button>
              <button
                onClick={() => handleModalSubmit()}
                type='button'
                className='btn btn-primary'
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .modal-parent {
            margin-top: 1rem;
          }

          button.btn.btn-primary {
            margin: 0 auto !important;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default Modal;
