const btnTypes = [
    'text',  'outline', 'toggle',
    'primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark', 'link'
];

const btnStyles = [
    '', 'regular', 'circle', 'rounded', 'block'
];

const btnStates = [
    '', 'active', 'hover', 'focus'
];

const btnType = [
    '', 'button', 'submit', 'reset'
];

export default {
    props: {
        type: {
            type: String,
            default: 'primary',
            validator: (value) => btnTypes.indexOf(value) !== -1
        },
        btnStyle: {
            type: String,
            default: '',
            validator: (value) => btnStyles.indexOf(value) !== -1
        },
        state: {
            type: String,
            dfault: '',
            validator: (value) => btnStates.indexOf(value) !== -1
        },
        btnType: {
            type: String,
            default: "button",
            validator: (value) => btnType.indexOf(value) !== -1
        },
        btnName: {
            type: String,
            default: ''
        },
        btnValue: {
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
        },
        href: {
            type: String,
            default: ''
        },
        autofocus: {
            type: Boolean,
            default: false
        }
    },
    data: function() {
        let typeClasses = this.setTypeClass(this.type)
        let styleClasses = this.setStyleClass(this.btnStyle);
        let stateClasses = this.setStateClass(this.state);

        let classes = {
            "disabled": this.href.length > 0 ? this.disabled : false,
            "pressed": false
        };

        const btnClasses = Object.assign({}, typeClasses, styleClasses, stateClasses, classes);

        return {
            active: false,
            hasIcon: this.$slots.hasOwnProperty('icon'),
            btnClasses
        }
    },
    watch: {
        type(type) {
            this.btnClasses = Object.assign({}, this.btnClasses, this.setTypeClass(type));
        },
        btnStyle(style) {
            this.btnClasses = Object.assign({}, this.btnClasses, this.setStyleClass(style));
        },
        state(state) {
            this.btnClasses = Object.assign({}, this.btnClasses, this.setStateClass(state));
        },
        disabled(disabled) {
            if (this.href.length > 0) {
                this.btnClasses['disabled'] = disabled;
            }

            if (disabled) {
                this.$emit('disabled');
            } else {
                this.$emit('enable');
            }
        },
        active(active) {
            if (active) {
                this.btnClasses['pressed'] = true;
            } else {
                this.btnClasses['pressed'] = false;
            }
        }
    },
    methods: {
        setStateClass(state) {
            return {
                "active": this.state === 'active',
                "hover": this.state === 'hover',
                "focus": this.state === 'focus'
            };
        },
        setStyleClass(style) {
            return {
                "ve-btn-round": this.btnStyle === 'rounded',
                "ve-btn-circle": this.btnStyle === 'circle',
                "ve-btn-block": this.btnStyle === 'block',
            };
        },
        setTypeClass(type) {
            let classes = {};

            for (let t of btnTypes) {
                classes[`ve-btn-${t}`] = (t === type);
            }

            return classes;
        },
        clicked() {
            if (this.type === 'toggle') {
                this.active = !this.active;
            }
        },
        linkClicked(e) {
            if (this.disabled) {
                e.preventDefault();
            }
        }
    }
}
