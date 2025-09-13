const Paginator = ({ dataLength, activeIndex, setIndex }) => {
    
    let dots = [];
    let classes = "";

    // Handle cards with pagination 
    const handlePageChange = (page) => {
        let n = page - activeIndex;
        setIndex(activeIndex + n);
    };

    for (let index = 0; index < dataLength; index++) {
        classes = activeIndex === index ? "dot active" : "dot";
        dots.push(
            <div key={index} className={classes} onClick={() => handlePageChange(index)}></div>
        );
    }

  return (
    <div className="paginator">
        <div className="hr"></div> {/* horizontal rule */}
        { dots.map((dot) => dot) }
    </div>
  )
}

export default Paginator
