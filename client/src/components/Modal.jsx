import { GiTireIronCross } from "react-icons/gi";

const Modal = ({ onClose }) => {
  return (
    <div className="modal">
        <GiTireIronCross onClick={onClose} />
        <div className="dob">
            <label htmlFor="DOB">DOB:</label>
            <input type="date" name="dob" id="dob" />
        </div>
        <div className="weight">
            <label htmlFor="weight">Weight:</label>
            <input type="number" name="weight" id="weight" />
        </div>
        <div className="height">
            <label htmlFor="height">Height:</label>
            <input type="number" name="height" id="height" />
        </div>
        <div className="level">
            <label htmlFor="level">Level:</label>
            <select name="level" id="level">
                <option value="Beginner">Beginner (0-1 yrs)</option>
                <option value="Intermediate">Intermediate (1-2+ yrs)</option>
                <option value="Expert">Expert (3+ yrs)</option>
            </select>
        </div>
    </div>
  )
}

export default Modal