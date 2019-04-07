<template>
    <div>
        <div>
            <p>非model的vuex双向数据绑定</p>
            <a-input :value="stateValue" @input="handleInputStateValue"/>
        </div>
        <div>
            <p>model的vuex双向数据绑定</p>
            <a-input v-model="stateValue"/>
        </div>
        <a-show :content="stateValue"></a-show>
        <p>{{ inputValueLastLetter }}</p>
        <p>{{ appName }}</p>
        <p>{{ userName }} -> {{ firstLetter }}</p>
        <p>{{ appNameWithVersion }}</p>
        <button @click="handleChangeAppName">change name</button>
        <p>{{ appVersion }}</p>
        <button @click="changeUserName">changeUserName</button>
        <button @click="registerModule">动态注册模块</button>
        <p v-for="(item, index) in todoList" :key="index">
            {{ item }}
        </p>
        <p>user</p>
        <p v-for="(item, index) in todoListInUser" :key="index + '_'">
            {{ item }}
        </p>
    </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
// 获取vuex状态值的另一个方法, 以下是工具方法
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
    components: {
        AInput,
        AShow
    },
    data () {
        return {
            value: ''
        }
    },
    computed: {
        appName () {
            return this.$store.state.appName;
        },
        // userName () {
        //     return this.$store.state.user.userName;
        // }
        // ...展开操作符，将一个对象扁平化引入computed对象
        // ...mapState([
        //     'appName'
        // ])
        ...mapState ({
            // appName: state => state.appName,
            userName: state => state.user.userName,
            appVersion: state => state.appVersion,
            todoList: state => state.todo ? state.todo.todoList : [],
            todoListInUser: state => state.user.todo ? state.user.todo.todoList : [],
        }),
        ...mapGetters([
            'appNameWithVersion',
            'firstLetter',
        ]),
        // appNameWithVersion () {
        //     return this.$store.getters.appNameWithVersion;
        // },
        inputValueLastLetter () {
            // 返回value的最后一个字符
            return this.value.charAt(this.value.length - 1);
        },
        stateValue: {
            get () {
                return this.$store.state.stateValue;
            },
            set (newStatevalue) {
                this.handleInputStateValue(newStatevalue);
            }
        }
    },
    methods: {
        ...mapMutations([
            'SET_APP_NAME',
            "SET_STATE_NAME"
        ]),
        ...mapActions([
            'updateAppName'
        ]),
        handleInput (val) {
            this.value = val;
        },
        handleInputStateValue (newStatevalue) {
            this.SET_STATE_NAME({ newStatevalue });
        },
        handleChangeAppName () {
            // 1
            // this.$store.commit('SET_APP_NAME', {
            //     appName: 'newAppName'
            // });
            // 2
            // this.$store.commit({
            //     type: 'SET_APP_NAME',
            //     appName: 'newAppName'
            // });
            // 3使用了mapMutations后
            // this.SET_APP_NAME({appName: 'newAppNAmeByMapMutations'});
            // this.$store.commit("SET_APP_VERSION");

            // actions
            this.updateAppName();
        },
        changeUserName () {
            this.$store.dispatch('updateUserName', 'sss jade');
        },
        registerModule () {
            // 该方法与在文件中注册一个数组是一样的
            this.$store.registerModule('todo', {
                state: {
                    todoList: [
                        '学习mutations',
                        '学习actions'
                    ]
                }
            });
            // 将模块动态注册到已有模块中
            this.$store.registerModule(['user', 'todo'], {
                state: {
                    todoList: [
                        'user 命名空间下的 学习mutations',
                        'user 命名空间下的 学习actions'
                    ]
                }
            });
        }
    }
}
</script>
