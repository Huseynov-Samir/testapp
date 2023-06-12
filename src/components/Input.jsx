function Input({
		addTodo,
		handleInput,
		title
	}) {
	return ( 
		<form onSubmit={addTodo}>
			<input type="text" value={title} onChange={handleInput} />
			<button type='submit'>click</button>
		</form>
	 );
}

export default Input;