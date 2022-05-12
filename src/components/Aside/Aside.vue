<script setup lang='ts'>
import {mainStore} from '@/store'
import {storeToRefs} from 'pinia'
import {useRouter} from 'vue-router'
import {Location, Menu as IconMenu} from '@element-plus/icons-vue';


/**
 * 使用pinia替代vuex
 */

const useStore = mainStore();
const {collapse} = storeToRefs(useStore);
// console.log(collapse);

//使用router获取路由信息
const router = useRouter();

//使用props传递数据
const props = defineProps({
  msg: {
    type: String,
    default: "默认数据"
  }
});
// console.log(props);

//使用defineEmits向父组件中传递数据
const emits = defineEmits(["delivery"]);

const fn = () => {
  emits("delivery", "子组件Aside传递给父组件Layout的数据")
}

</script>

<template>
  <div class="aside">
    <div class="aside-header" @click="fn">Aside--Header</div>
    <div class="aside-menu">
      <el-menu :default-active="router.currentRoute.value.path" class="el-menu-vertical-demo" :collapse="collapse"
               router>
        <el-menu-item index="/router1">
          <el-icon>
            <location/>
          </el-icon>
          <span>启用路由一</span>
        </el-menu-item>
        <el-menu-item index="/router2">
          <el-icon>
            <icon-menu/>
          </el-icon>
          <span>启用路由二</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.aside {
  .aside-header {
    height: 60px;
    border-bottom: 1px solid #cecece;
    box-sizing: border-box;
  }

  .aside-menu {
    overflow-x: hidden;

    .el-menu {
      border: none;
    }
  }
}
</style>