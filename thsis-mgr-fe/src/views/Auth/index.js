import { defineComponent, reactive } from 'vue';
import { UserOutlined, LockOutlined, ShareAltOutlined } from '@ant-design/icons-vue';
import { auth } from '@/service';

export default defineComponent({
    components: {
        UserOutlined,
        LockOutlined,
        ShareAltOutlined,
    },
    setup() {
        const regForm = reactive({
            account: '',
            password: '',
        });
        const register = () => {
            auth.register(regForm.account, regForm.password);
            // console.log(regForm);
        };

        return {
            regForm,
            register,
        };
    },
});
