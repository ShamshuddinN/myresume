const HomeSideBar = () => {
    return <div className="container  p-2  ">
    <div className="row justify-content-center mt-3">
      <div className="col-8">
        <img
          height={150}
          width={150}
          className="rounded rounded-circle"
          src="https://cdn.pixabay.com/photo/2018/02/16/14/38/portrait-3157821_1280.jpg"
          alt="profileimg"
        />
      </div>
    </div>

    <div className="row justify-content-center">
      <div className="col-8">
        <h4 className="text-center mt-2">Name Here</h4>
      </div>
    </div>

    <div className="row justify-content-center mt-3">
      <div className="col-4 ">
        <div className="text-center rounded rounded-pill border border-primary linkedin ">
          <i className="bi bi-linkedin text-primary fs-5"></i>
        </div>
      </div>
    </div>

    <div className="row justify-content-center mt-5">
      <div className="col-8">
        <ul className="list-group text-center">
          <li className=" menuHover mt-3 rounded ">
            {" "}
            <i className="bi bi-house"></i> Home{" "}
          </li>
          <li className="menuHover mt-3  rounded ">
            {" "}
            <i className="bi bi-person"></i> About{" "}
          </li>
          <li className="menuHover mt-3  rounded ">
            {" "}
            <i className="bi bi-file-earmark-text"></i> Resume{" "}
          </li>
        </ul>
      </div>
    </div>
  </div>
}

export default HomeSideBar;