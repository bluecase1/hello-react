import React, { Component } from 'react';

class IterationSample extends Component {
	state = {
		names: ['눈사람', '얼음', '눈', '바람'],
		name: ''
	};

	handelChange = (e) => {
		this.setState({
			name: e.target.value
		});
	}
	
	handleInsert = () => {
		this.setState({
			names: this.state.names.concat(this.state.name),
			name: ''
		});
	}
	
	handelRemove = (index) => {
		// 편의상 name의 레퍼런스를 미리 만듭니다.
		const { names } = this.state;

		/* 배열을 자르는 내장 함수 slice와 
		   전개 연산자(...)를 사용하여 index번째 값을 제외한 값들을
		   배열에 넣어 줍니다. 
		*/

		this.setState({
			// names: [
			// ...names.slice(0, index), 
			// ...names.slice(index + 1, names.length)
			// ]
			names: names.filter((item, i) => i !== index)
    });
	}
		
	render() {
		const nameList = this.state.names.map(
			(name, index) => (
				<li key={index}
					onDoubleClick={() => this.handelRemove(index)}>
				{name}
				</li>
			)
		);
	
		return (
			<div>
				<tr>항목을 더블 클릭하면 삭제됩니다.</tr>
				<input
					onChange={this.handelChange}
					value={this.state.name}
				/>
				<button onClick={this.handleInsert}>추가
				</button>
				<ul>
					{nameList}
				</ul>
			</div>
		);
	}
}

export default IterationSample;