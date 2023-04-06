import {useState} from "react";

function Form() {
    const [form, setForm] = useState({
        firstName: "firstName",
        lastName: "lastName",
        email: "someone@email.com"
    });

    return (
      <>
          <label>
              First Name:
              <input value={form.firstName} onChange={ event =>
                  setForm({
                      ...form,
                      firstName: event.target.value
                  })
              }/>
          </label>
          <label>
              Last Name:
              <input value={form.lastName} onChange={event => {
                  setForm({
                      ...form,
                      lastName: event.target.value
                  })
              }
              }/>
          </label>
          <label>
              email:
              <input value={form.email} onChange={event => {
              setForm({
                  ...form,
                  email: event.target.value
              })
              }
              }/>
          </label>
          <p>
              {form.firstName} {form.lastName} {form.email}
          </p>
      </>
    );
}

export default Form;