const Divider = ({ light }) => {
  const lineColor = light ? "bg-white" : "bg-secondary";
  const iconColor = light ? "text-white" : "text-secondary";

  return (
    <div className="d-flex justify-content-center align-items-center mb-4">
      <div className={`${lineColor} rounded`} style={{ width: '100px', height: '4px' }}></div>
      <div className={`${iconColor} mx-3 fs-3`}><i className="fas fa-star"></i></div>
      <div className={`${lineColor} rounded`} style={{ width: '100px', height: '4px' }}></div>
    </div>
  );
};

export default Divider;