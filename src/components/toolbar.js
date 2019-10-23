import React from "react";

import { useStateValue } from "../hooks/useGlobalState";

const Toolbar = () => {

  const [{darkMode}, dispatch] = useStateValue();

  const bgColor = (darkMode) ? '#000' : '#efefef' ;

  return(
    <div style={{ background: bgColor }}>Toolbar</div>
  )
}

export default Toolbar
