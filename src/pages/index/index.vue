<template>
  <view>
    <picker v-if="formObj.serviceType === 'singleExpertConsultation'" @change="expertSelect"> 请选择 </picker>
    <textarea v-model="formObj.conditionDescription" placeholder="请输入" />
    <view @click="addPicture">+</view>
  </view>
</template>

<script lang="ts">
interface AppointParams {
  patientName: string;
  patientIdCard: string;
  sex: string;
  phoneNumber: string;
  alternatePhoneNumber: string;
  bornDate: string;
  disease: number;
  city: string;
  relationship: string;
  serviceType: string;
  expertTeamName: string;
  expertTeamId: string;
  expertId: string;
  expertName: string;
  serviceFee: number;
  conditionDescription: string;
  fidList: string[];
  consultationAppeal: string;
}
const defaultFormObj = {
  patientName: '',
  patientIdCard: '',
  sex: '',
  phoneNumber: '',
  alternatePhoneNumber: '',
  bornDate: '',
  disease: 0,
  city: '',
  relationship: '',
  serviceType: 'singleExpertConsultation',
  expertTeamName: '',
  expertTeamId: '',
  expertId: '',
  expertName: '',
  serviceFee: 0,
  conditionDescription: '',
  fidList: [],
  consultationAppeal: '',
};

import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

export default {
  setup() {
    const formObj = ref<AppointParams>({
      ...defaultFormObj,
    });

    onLoad(() => {
      formObj.value.serviceType = 'options?.serviceType';
    });

    // 添加图片
    const addPicture = () => {
      console.info('addPicture');
      uni.chooseImage({
        count: 1,
        success: async (res) => {},
      });
    };

    const expertSelect = () => {
      console.info('expertSelect');
    };

    return {
      formObj,
      addPicture,
      expertSelect,
    };
  },
};
</script>
