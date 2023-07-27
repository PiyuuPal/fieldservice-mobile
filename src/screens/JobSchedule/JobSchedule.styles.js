import { StyleSheet } from 'react-native';
import { spacing } from '@/theme';
import { font } from '@/theme/font';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewheader:{
    marginTop:15, 
    paddingBottom:10,
    height: 50,
  },
  headertext:{
    color:'black',
    fontSize:20,
    
    marginLeft:15,
    marginTop:2,
    fontFamily:font.regular,
    },
  iconrightChevron: { marginTop:6,marginBottom:'auto', marginLeft: spacing.m, tintColor: '#195090' },
});
