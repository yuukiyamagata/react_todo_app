export const InputForm = () => {
    const labelStyle = {
      marginRight: "20px",
      fontWeight: 'bold',
      fontSize: '30px',
    };
  return(
    <>
      <div className="inputArea">
        <div className="ui fields">
            <div className="field">
              <label style={labelStyle}>Create a new todo</label>
              <input type="text" className='inputForm' />
              <button class="ui orange small button">Add</button>
            </div>
        </div>
      </div>
    </>
  )
}