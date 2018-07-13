
import { Vue, Component, Prop, Watch } from "vue-property-decorator";

interface BtnClassesInterface {
    [className: string]: boolean;
};

const btnTypes: Array<string> = [
    'text',  'outline', 'toggle',
    'primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark', 'link'
];

const btnStyles: Array<string> = [
    '', 'regular', 'circle', 'rounded', 'block'
];

const btnStates: Array<string> = [
    '', 'active', 'hover', 'focus'
];

const btnType: Array<string> = [
    '', 'button', 'submit', 'reset'
];

@Component
export default class veButton extends Vue {
    @Prop({
        default: "primary",
        validator: (value: string): boolean => btnTypes.indexOf(value) !== -1
    })
    protected type!: string;

    @Prop({
        default: "",
        validator: (value: string): boolean => btnStyles.indexOf(value) !== -1
    })
    protected btnStyle!: string;

    @Prop({
        default: "",
        validator: (value: string): boolean => btnStates.indexOf(value) !== -1
    })
    protected state!: string;

    @Prop({
        default: "button",
        validator: (value: string): boolean => btnType.indexOf(value) !== -1
    })
    protected btnType!: string;

    @Prop({ default: "" })
    protected btnName!: string;

    @Prop({ default: null })
    protected btnValue!: any;

    @Prop({ default: false })
    protected disabled!: boolean;

    @Prop({ default: "" })
    protected href!: string;

    @Prop({ default: false })
    protected autofocus!: boolean;

    protected active: boolean = false;

    protected hasIcon: boolean = typeof this.$slots.icon === 'object';

    protected btnClasses: BtnClassesInterface = {};

    constructor() {
        super();

        let typeClasses = this.setTypeClass(this.type)
        let styleClasses = this.setStyleClass(this.btnStyle);
        let stateClasses = this.setStateClass(this.state);

        let classes = {
            "disabled": this.href.length > 0 ? this.disabled : false,
            "pressed": false
        };

        this.btnClasses = Object.assign({}, typeClasses, styleClasses, stateClasses, classes);
    }

    @Watch('type')
    onTypeChanged(type: string): void {
        this.btnClasses = Object.assign({}, this.btnClasses, this.setTypeClass(type));
    }

    @Watch('style')
    onStyleChanged(style: string): void {
        this.btnClasses = Object.assign({}, this.btnClasses, this.setStyleClass(style));
    }

    @Watch('state')
    onStateChanged(state: string): void {
        this.btnClasses = Object.assign({}, this.btnClasses, this.setStateClass(state));
    }

    @Watch('disabled')
    onDisabledChanged(disabled: boolean): void {
        if (this.href.length > 0) {
            this.btnClasses['disabled'] = disabled;
        }

        if (disabled) {
            this.$emit('disabled');
        } else {
            this.$emit('enable');
        }
    }

    @Watch('active')
    onActiveChanged(active: boolean): void {
        if (active) {
            this.btnClasses['pressed'] = true;
        } else {
            this.btnClasses['pressed'] = false;
        }
    }

    setStateClass(state: string): BtnClassesInterface {
        return {
            "active": this.state === 'active',
            "hover": this.state === 'hover',
            "focus": this.state === 'focus'
        };
    }

    setStyleClass(style: string): BtnClassesInterface {
        return {
            "ve-btn-round": this.btnStyle === 'rounded',
            "ve-btn-circle": this.btnStyle === 'circle',
            "ve-btn-block": this.btnStyle === 'block',
        };
    }

    setTypeClass(type: string): BtnClassesInterface {
        let classes: BtnClassesInterface = {};

        for (let t of btnTypes) {
            classes[`ve-btn-${t}`] = (t === type);
        }

        return classes;
    }

    clicked(): void {
        if (this.type === 'toggle') {
            this.active = !this.active;
        }
    }

    linkClicked(e: MouseEvent): void {
        if (this.disabled) {
            e.preventDefault();
        }
    }
}
