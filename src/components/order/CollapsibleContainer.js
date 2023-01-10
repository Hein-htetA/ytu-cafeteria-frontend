import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { useOrderContext } from "../../Context/OrderContext";
import "./CollapsibleContainer.css";
import { setDetailContainerHeight as setDetailContainerHeightRTK } from "../../features/user/orderSlice";

const CollapsibleContainer = ({
  id,
  children,
  detailContainerHeight,
  detailHide,
}) => {
  const { setDetailContainerHeight, onClickDetailHide } = useOrderContext();
  //console.log(detailContainerHeight);
  // const [forceRender, setForceRender] = useState(true);

  const collapseContainerRef = useRef(null);
  // const heightRef = useRef(null);
  const firstRender = useRef(true);

  const dispatch = useDispatch();

  // console.log("heightRef.current", heightRef.current);

  useEffect(() => {
    if (firstRender.current) {
      setDetailContainerHeight(id, collapseContainerRef.current.offsetHeight);
      dispatch(
        setDetailContainerHeightRTK({
          id,
          detailContainerHeight: collapseContainerRef.current.offsetHeight,
        })
      );
      firstRender.current = false;
      onClickDetailHide(id);
    }

    const reload = function (event) {
      document.location.reload(false);
    };

    window.screen.orientation.addEventListener("change", reload);

    return () =>
      window.screen.orientation.removeEventListener("change", reload);
  }, []);

  return (
    <div
      ref={collapseContainerRef}
      className={
        detailHide
          ? " collapse-container collapse-container-hidden"
          : "collapse-container"
      }
      style={{
        height: firstRender.current
          ? "auto"
          : detailHide
          ? 0
          : detailContainerHeight,
      }}
    >
      {children}
      <div className="space-holder-transition">.</div>
    </div>
  );
};

export default CollapsibleContainer;
