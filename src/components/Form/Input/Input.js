const Input = ({ inputValue, setInputValue }) => {


    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    return (
        <label className="cityChoiceInput" htmlFor="city"> Rechercher une ville par nom ou code postal : 
            <input
                onChange={handleChange}
                value={inputValue}
                type="text"
                id="city"
                name="city"
                autoComplete='off'
            >
            </input>
        </label>
    );
}

export default Input;
