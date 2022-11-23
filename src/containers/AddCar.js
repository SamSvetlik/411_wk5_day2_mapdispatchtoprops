import { connect } from 'react-redux'
import AddCar from '../components/AddCar'
import {addCar} from '../redux/actions'

const mapDispatchToProps = (dispach) => {
    return {
        addCar: (car) => dispach(addCar(car))
    }
}

export default connect(null, mapDispatchToProps)(AddCar)
