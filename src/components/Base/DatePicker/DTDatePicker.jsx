import DatePicker from 'react-native-date-picker'
import { useState } from 'react'
import { black, white } from '../../../styles/colors'
import dateFormat from 'dateformat'

export default function DTDatePicker(props) {
    // const [date, setDate] = useState(new Date());

    return (
    <>
        <DatePicker
            modal
            open={props.open}
            date={new Date(props.date)}
            mode="date"
            onConfirm={(date) => {
                props.setOpen(false)
                props.setDate(date)
            }}
            onCancel={() => {
                props.setOpen(false)
            }}
            customStyles={{
                btnCancel: {
                    backgroundColor: 'red',
                },
                btnTextCancel: {
                    color: 'red',
                },
                datePicker: {
                    backgroundColor: black
                }
            }}
            textColor={white}
            cancelText="Cancel"
            theme='dark'
        />
    </>
    )
}