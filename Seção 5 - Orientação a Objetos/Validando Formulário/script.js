class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector('.formulario')
        this.events();
    }
    events() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const validcamps = this.validCamps()
        const validPassword = this.validPassword()

        if (validcamps && validPassword) {
            alert('Formulário enviado.')
            this.formulario.submit()
        }
    }

    validPassword() {
        let valid = true

        const password = this.formulario.querySelector('.senha')
        const repeatPassword = this.formulario.querySelector('.repetir-senha')

        if (password.value !== repeatPassword.value) {
            valid = false
            
            this.createError(password, 'As senhas precisam ser iguais')
            this.createError(repeatPassword, 'As senhas precisam ser iguais')
        }

        if (password.value < 6 || password.value > 12) {
            valid = false

            this.createError(password, 'As senhas precisam ter entre 6 e 12 caracteres')
        }

        return valid
    }

    validCamps() {
        let valid = true

        // Remove all error text
        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove()
        }

        // Valid empty camp
        for (let camp of this.formulario.querySelectorAll('.validar')) {
            if(!camp.value) {
                // previousElementSibling retorna o elemento anterior
                const label = camp.previousElementSibling.innerText
                
                this.createError(camp, `Campo ${label} não pode estar branco`)

                valid = false
            }

            // Valid CPF
            if (camp.classList.contains('cpf')) {
                if (!this.validCPF(camp)) valid = false
            }

            // Valid User   
            if (camp.classList.contains('usuario')) {
                if (!this.validUser(camp)) valid = false
            }
        }

        return valid
    }

    validCPF(camp) {
        const cpf = new ValidaCPF(camp.value)

        if (!cpf.valida()) {
            this.createError(camp, 'CPF inválido')
            return false
        }

        return true
    }

    validUser(camp) {
        let valid = true

        if (camp.value.length < 3 || camp.value.length > 12) {
            this.createError(camp, 'Digite entre 3 e 12 caracteres')
            valid = false
        }

        if (!camp.value.match(/^[a-zA-Z0-9]+$/g)) {
            this.createError(camp, 'Digite apenas letras ou números')
        }

        return valid
    }

    createError(camp, msg) {
        const div = document.createElement('div')

        div.innerHTML = msg
        div.classList.add('error-text')

        camp.insertAdjacentElement('afterend', div)
    }
}

const valida = new ValidaFormulario()