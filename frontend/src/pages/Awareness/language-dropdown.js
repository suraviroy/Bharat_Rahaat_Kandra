const Languageoption = (props) => {
    return (
      <select onChange={props.onChange}>
        <option>Select Language</option>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="be">Bengali</option>
      </select>
    );
  };
export default Languageoption;