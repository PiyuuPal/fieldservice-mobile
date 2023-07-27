import PropTypes from 'prop-types';
import { estimatesIcon, gethelpIcon, homeDrawerIcon, homeIcon, invoicesIcon, jobsIcon, leadsIcon, settingIcon, timeSheetIcon } from '@/assets';
import { Drawers } from '@/constants/navigation';
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Image } from 'react-native';
export function DrawerIcon({color, routeName })  {
    const drawerIcon = {
        [Drawers.home]:homeDrawerIcon,
        [Drawers.timesSheet]:timeSheetIcon,
        [Drawers.jobs]:jobsIcon,
        [Drawers.leads]:leadsIcon,
        [Drawers.invoices]:invoicesIcon,
        [Drawers.estimates]:estimatesIcon,
        [Drawers.setting]:settingIcon,
        [Drawers.getHelp]:gethelpIcon,
      };
    return (
        <Image
        accessibilityIgnoresInvertColors
        source={drawerIcon[routeName]}
        style={{ color:'#195090'}}
      />
    )
}
DrawerIcon.propTypes = {
    color: PropTypes.string.isRequired,
    routeName: PropTypes.string.isRequired,
  };
  