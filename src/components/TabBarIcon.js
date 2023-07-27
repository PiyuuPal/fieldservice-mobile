import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Image, ImageBackground, TouchableOpacity, Modal, View, ActivityIndicator } from 'react-native';
import { addBottomIcon, clientIcon, homeIcon, messagesIcon, plusIcon, schduleIcon, settingsIcon } from '@/assets';
import { TABS } from '@/constants/navigation';
import { useNavigation } from '@react-navigation/native';
import ExploreBottomsheet from '@/screens/JobCreate/ExploreBottomsheet';


const tabIcon = {
  [TABS.home]: homeIcon,
  [TABS.jobSchedule]: schduleIcon,
  [TABS.addBottomSheet]: plusIcon,
  [TABS.messages]: messagesIcon,
  [TABS.existingClientList]: clientIcon,
};

export function TabBarIcon({ color, routeName }) {
  const [modalView, setModalView] = useState(false)

  const openBottomsheet = () => {
    console.log("openbottomsheet")
    setModalView(true)
    renderModal();
  }
  const renderModal = () => {
    console.log("modal", modalView)
    return (
        <View>
        {modalView ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ExploreBottomsheet closeModal={setModalView} />
        </View> : null}
      </View>
    )
  }

  const navigation = useNavigation();
  if (routeName != 'New Job') {
    return (
      <View >
         <Image
          accessibilityIgnoresInvertColors
          source={tabIcon[routeName]}
          style={{ tintColor: color }}
        />
      </View>
    );
  } else {
    return (
          <View style={{marginTop: 25 }} >
            <TouchableOpacity
              // onPress={() => navigation.navigate(TABS.addBottomSheet)}'
              // onPress={openBottomsheet}
              onPress={() => setModalView(true)}

            >
              <Image
                accessibilityIgnoresInvertColors
                source={addBottomIcon}
              />
            </TouchableOpacity>
          {renderModal()}
        
      </View>

    );
  }

}
TabBarIcon.propTypes = {
  color: PropTypes.string.isRequired,
  routeName: PropTypes.string.isRequired,
};
