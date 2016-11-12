'use strict';

import { connect } from 'react-redux';
import RootModal from '../components/RootModal';
import { fetchNewQuestion } from '../reducer';

const mapStateToProps = ({currentQuestion}) => ({currentQuestion}); 

const mapDispatchToProps = dispatch => ({
    getNewQuestion(){
    	dispatch(fetchNewQuestion());
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(RootModal);