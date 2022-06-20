import * as common from "./common";

export const preset = [
   {
      ...common.main({ name: "bardicinspiration" }),
      audio: common.audio(),
      presetType: "bardicinspiration",
      macro: common.macro(),
      data: {
         self: {
            enable: true,
            animation: "bardicinspiration",
            variant: "inspire",
            color: "yellowblue",
         },
         target: {
            enable: true,
            animation: "bardicinspiration",
            variant: "inspire",
            color: "yellowblue",
         },
         marker: {
            enable: true,
            selfColor: "yellowblue",
            targetColor: "yellowblue",
         },
         below: false,
         scale: 1,
      },
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ name: "bless" }),
      audio: common.audio(),
      presetType: "bless",
      macro: common.macro(),
      data: {
         below: true,
         color: "yellow",
         persistent: false,
         scale: 1.5,
         unbindAlpha: false,
         unbindVisbility: false,
      },
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ name: "shield" }),
      audio: common.audio(),
      presetType: "shieldspell",
      macro: common.macro(),
      data: {
         animation: "shieldspell",
         below: false,
         color: "blue",
         endEffect: "outro_explode",
         menuType: "spell",
         persistent: false,
         scale: 1,
         unbindAlpha: false,
         unbindVisbility: false,
         variant: "01",
      },
      source: common.source(),
      target: common.target()
   },

   {
      ...common.main({ name: "mistystep" }),
      audio: common.audio(),
      presetType: "teleportation",
      macro: common.macro(),
      data: {
         range: 30,
         hideFromPlayers: false,
         measureType: "alternating",
         start: {
            animation: "mistystep",
            below: false,
            color: "blue",
            customPath: "",
            enableCustom: false,
            isMasked: false,
            menuType: "spell",
            opacity: 1,
            scale: 1.5,
            variant: "01",
         },
         end: {
            animation: "mistystep",
            below: false,
            color: "blue",
            customPath: "",
            delay: 250,
            enableCustom: false,
            isMasked: false,
            menuType: "spell",
            scale: 1.5,
            variant: "02",
         },
         between: {
            enable: false,
            animation: "chainlightning",
            below: false,
            color: "blue",
            customPath: "",
            enableCustom: false,
            menuType: "spell",
            playbackRate: 1,
            variant: "primary",
         },
      },
      source: common.source(),
      target: common.target()
   }
];
