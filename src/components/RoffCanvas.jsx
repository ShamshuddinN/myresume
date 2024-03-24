import SideNav from "./SideNav";

const RoffCanvas = () => {
    return <>
    <div className="position-relative mt-3 ms-3 hamButton">
              <button className="btn btn-info rounded rounded-circle py-1  " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" > <i className="bi bi-list fs-5"></i> </button>
          </div>

        <div
          className="offcanvas offcanvas-start"
          data-bs-scroll="true"
          tabIndex={-1}
          id="offcanvasWithBothOptions"
          aria-labelledby="offcanvasWithBothOptionsLabel"
        >
          {/* Offcanvas Head  */}
          <div className="offcanvas-header justify-content-end">
            <button
              type="button"
              className="btn-close bg-info rounded rounded-circle  me-2  "
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          {/* End of Offcanvas Head  */}



          <div className="offcanvas-body">

            <SideNav/>
            


          </div>
        </div>
    </>
}

export default RoffCanvas;