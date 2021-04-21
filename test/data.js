module.exports = {
  "componentName": "Page",
  "id": "440c8250-a261-11eb-9c43-6d4b905f3aec",
  "props": {
    "style": {
      "display": "flex",
      "position": "relative",
      "alignItems": "center",
      "flexDirection": "column",
      "backgroundColor": "#ffffff",
      "width": "750px",
      "height": "1334px"
    },
    "className": "page"
  },
  "artboardImg": "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/320e2f90a26111eb9d9221f5eab7fcfd.png",
  "rect": {
    "x": 0,
    "y": 0,
    "width": 750,
    "height": 1334
  },
  "pluginVersion": "1.0.0",
  "smart": {
    "layerProtocol": {
      "custom-layout": {
        "type": "skip"
      }
    }
  },
  "name": "知识问答",
  "reference": "psd",
  "restore_id": "24b4e46c-9ed5-452b-a3cc-774d59af69d5",
  "children": [{
    "componentName": "Block",
    "id": "4019d30e-37b6-4d8d-8823-d5b8f11c2be6",
    "props": {
      "style": {
        "display": "flex",
        "position": "absolute",
        "top": "0px",
        "alignItems": "flex-start",
        "alignSelf": "center",
        "flexDirection": "row",
        "justifyContent": "center"
      },
      "className": "card"
    },
    "rect": {
      "x": 0,
      "y": 0,
      "width": 750,
      "height": 1334
    },
    "children": [{
      "componentName": "Image",
      "id": "440d45a4-a261-11eb-9c43-6d4b905f3aec",
      "props": {
        "style": {
          "width": "750px",
          "height": "1334px"
        },
        "src": "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/349ec580a26111eb91c1fdd3a4e04af6.png",
        "className": "long-banner"
      },
      "rect": {
        "x": 0,
        "y": 0,
        "width": 750,
        "height": 1334
      },
      "classNames": [{
        "name": "知识问答",
        "id": "560_91"
      }],
      "selfId": "layerId-2"
    }],
    "smart": {
      "layerProtocol": {
        "module": {
          "type": "smartModule",
          "params": {
            "moduleName": "card"
          }
        }
      }
    }
  }, {
    "componentName": "Block",
    "id": "35ad9d73-3258-4c3b-a8b7-e812e336105d",
    "props": {
      "style": {
        "display": "flex",
        "position": "relative",
        "alignItems": "center",
        "flexDirection": "row",
        "justifyContent": "center",
        "marginTop": "82px"
      },
      "className": "card-1"
    },
    "rect": {
      "x": 172,
      "y": 82,
      "width": 406,
      "height": 41
    },
    "fileName": "mod_0",
    "children": [{
      "componentName": "Image",
      "id": "440cd077-a261-11eb-9c43-6d4b905f3aec",
      "props": {
        "style": {
          "marginRight": "21px",
          "width": "140px",
          "height": "41px"
        },
        "src": "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/3796f6e0a26111eb91bf2b62ae51e7f0.png",
        "className": "logo"
      },
      "rect": {
        "x": 172,
        "y": 82,
        "width": 140,
        "height": 41
      },
      "classNames": [{
        "name": "知识问答",
        "id": "560_91"
      }, {
        "name": "LOGO",
        "id": "560_73"
      }, {
        "name": "矢量智能对象5",
        "id": "560_71"
      }],
      "selfId": "layerId-71"
    }, {
      "componentName": "Div",
      "id": "440cd078-a261-11eb-9c43-6d4b905f3aec",
      "props": {
        "style": {
          "marginTop": "5px",
          "marginRight": "23px",
          "backgroundColor": "#ffffff",
          "width": "5px",
          "height": "36px",
          "overflow": "hidden"
        },
        "className": "mask"
      },
      "rect": {
        "x": 333,
        "y": 87,
        "width": 5,
        "height": 36
      },
      "classNames": [{
        "name": "知识问答",
        "id": "560_91"
      }, {
        "name": "LOGO",
        "id": "560_73"
      }],
      "selfId": "layerId-70"
    }, {
      "componentName": "Image",
      "id": "440cd079-a261-11eb-9c43-6d4b905f3aec",
      "props": {
        "style": {
          "marginTop": "1px",
          "width": "217px",
          "height": "38px"
        },
        "src": "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/37622b40a26111eba8b01fa151a48b7b.png",
        "className": "action-bg"
      },
      "rect": {
        "x": 361,
        "y": 84,
        "width": 217,
        "height": 38
      },
      "classNames": [{
        "name": "知识问答",
        "id": "560_91"
      }, {
        "name": "LOGO",
        "id": "560_73"
      }, {
        "name": "矢量智能对象",
        "id": "560_69"
      }],
      "selfId": "layerId-69"
    }],
    "smart": {
      "nodeIdentification": {
        "baseComponent": ["countdown"]
      },
      "nodeCustom": {
        "baseComponent": {
          "isConfident": true,
          "label": "countdown",
          "score": 0.9999998807907104,
          "type": "baseComponent",
          "meta": {
            "threshold": 0.99
          },
          "rect": {
            "x": 172,
            "y": 82,
            "width": 406,
            "height": 41
          },
          "id": "35ad9d73-3258-4c3b-a8b7-e812e336105d",
          "selfId": null
        }
      },
      "layerProtocol": {
        "component": {
          "type": "countdown"
        },
        "module": {
          "type": "smartModule",
          "params": {
            "moduleName": "card"
          }
        }
      }
    }
  }, {
    "componentName": "Block",
    "id": "a7b73bc2-55fa-47e8-81e1-49404a762722",
    "props": {
      "style": {
        "display": "flex",
        "position": "relative",
        "alignItems": "flex-start",
        "flexDirection": "row",
        "marginTop": "15px",
        "color": "#ffffff",
        "lineHeight": "28px",
        "whiteSpace": "pre"
      },
      "className": "card-2"
    },
    "rect": {
      "x": 218,
      "y": 138,
      "width": 310,
      "height": 27
    },
    "fileName": "mod_1",
    "children": [{
      "componentName": "Text",
      "id": "440cd076-a261-11eb-9c43-6d4b905f3aec",
      "props": {
        "style": {
          "textAlign": "center",
          "textDecoration": "none",
          "letterSpacing": "2.8px",
          "fontSize": "28px"
        },
        "text": "娃哈哈×英雄联盟 线上青训营",
        "lines": 1,
        "className": "title"
      },
      "rect": {
        "x": 218,
        "y": 138,
        "width": 310,
        "height": 27
      },
      "classNames": [{
        "name": "知识问答",
        "id": "560_91"
      }, {
        "name": "LOGO",
        "id": "560_73"
      }],
      "selfId": "layerId-30_0"
    }],
    "smart": {
      "layerProtocol": {
        "module": {
          "type": "smartModule",
          "params": {
            "moduleName": "card"
          }
        }
      }
    }
  }, {
    "componentName": "Block",
    "id": "738f6acd-9d36-40f8-94ec-e7685ee11223",
    "props": {
      "style": {
        "display": "flex",
        "position": "relative",
        "alignItems": "flex-start",
        "flexDirection": "row",
        "marginTop": "43px",
        "color": "#ffffff",
        "lineHeight": "61px",
        "whiteSpace": "nowrap"
      },
      "className": "card-3"
    },
    "rect": {
      "x": 228,
      "y": 208,
      "width": 291,
      "height": 56
    },
    "fileName": "mod_2",
    "children": [{
      "componentName": "Text",
      "id": "440cd075-a261-11eb-9c43-6d4b905f3aec",
      "props": {
        "style": {
          "textAlign": "center",
          "textDecoration": "none",
          "letterSpacing": "6.1px",
          "fontSize": "61px"
        },
        "text": "知识问答学习",
        "lines": 1,
        "className": "caption"
      },
      "rect": {
        "x": 228,
        "y": 208,
        "width": 291,
        "height": 56
      },
      "classNames": [{
        "name": "知识问答",
        "id": "560_91"
      }, {
        "name": "title",
        "id": "560_76"
      }],
      "selfId": "layerId-31_0"
    }],
    "smart": {
      "layerProtocol": {
        "module": {
          "type": "smartModule",
          "params": {
            "moduleName": "card"
          }
        }
      }
    }
  }, {
    "componentName": "Block",
    "id": "22c969ad-1d1f-4251-82df-d3a01a2da055",
    "props": {
      "style": {
        "display": "flex",
        "position": "relative",
        "alignItems": "flex-start",
        "flexDirection": "row",
        "marginTop": "22px"
      },
      "className": "list"
    },
    "rect": {
      "x": 46,
      "y": 286,
      "width": 659,
      "height": 1000
    },
    "fileName": "mod_3",
    "children": [{
      "componentName": "Div",
      "id": "b8cfb4fe-3c06-4674-96d5-8b315e2e133f",
      "props": {
        "style": {
          "display": "flex",
          "position": "relative",
          "alignItems": "flex-start",
          "flexDirection": "row",
          "justifyContent": "center",
          "marginTop": "21px",
          "backgroundColor": "#ffffff",
          "width": "659px",
          "height": "979px",
          "overflow": "hidden"
        },
        "className": "primary"
      },
      "rect": {
        "x": 46,
        "y": 307,
        "width": 659,
        "height": 979
      },
      "classNames": [{
        "name": "知识问答",
        "id": "560_91"
      }, {
        "name": "UIBG",
        "id": "560_7"
      }],
      "selfId": "layerId-4",
      "children": [{
        "componentName": "Div",
        "id": "0ce964c7-c6aa-4f61-b6c0-144c668a9165",
        "props": {
          "style": {
            "display": "flex",
            "position": "absolute",
            "bottom": "12px",
            "left": "0px",
            "alignItems": "flex-start",
            "flexDirection": "row",
            "justifyContent": "center",
            "backgroundSize": "contain",
            "backgroundImage": "url(https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/34f522e0a26111eb89bc1da52a1a523d.png)",
            "width": "659px",
            "height": "138px"
          },
          "src": "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/34f522e0a26111eb89bc1da52a1a523d.png",
          "className": "wrapper-inner"
        },
        "rect": {
          "x": 46,
          "y": 1136,
          "width": 659,
          "height": 138
        },
        "classNames": [{
          "name": "知识问答",
          "id": "560_91"
        }, {
          "name": "UIBG",
          "id": "560_7"
        }, {
          "name": "Vector Smart Object",
          "id": "560_5"
        }],
        "selfId": "layerId-5",
        "children": [{
          "componentName": "Div",
          "id": "cc1ad517-78c4-47ac-b8ef-6e6779297d51",
          "props": {
            "style": {
              "boxSizing": "border-box",
              "display": "flex",
              "alignItems": "center",
              "flexDirection": "row",
              "marginTop": "45px",
              "backgroundColor": "#ffffff",
              "backgroundImage": "linear-gradient(to top, rgb(255,87,111), rgb(236,44,86))",
              "paddingRight": "14px",
              "paddingLeft": "14px",
              "height": "63px",
              "overflow": "hidden"
            },
            "className": "group"
          },
          "rect": {
            "x": 278,
            "y": 1181,
            "width": 195,
            "height": 63
          },
          "classNames": [{
            "name": "知识问答",
            "id": "560_91"
          }, {
            "name": "按钮",
            "id": "560_67"
          }],
          "selfId": "layerId-63",
          "children": [{
            "componentName": "Image",
            "id": "440cf781-a261-11eb-9c43-6d4b905f3aec",
            "props": {
              "style": {
                "width": "17px",
                "height": "19px",
                "overflow": "hidden"
              },
              "src": "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/373a30e0a26111eb87dd518891254080.png",
              "className": "icon"
            },
            "rect": {
              "x": 292,
              "y": 1203,
              "width": 17,
              "height": 19
            },
            "classNames": [{
              "name": "知识问答",
              "id": "560_91"
            }, {
              "name": "按钮",
              "id": "560_67"
            }],
            "selfId": "layerId-65",
            "smart": {
              "layerProtocol": {
                "layout": {
                  "type": "layout",
                  "position": "left"
                }
              }
            }
          }, {
            "componentName": "Text",
            "id": "440cf780-a261-11eb-9c43-6d4b905f3aec",
            "props": {
              "style": {
                "marginTop": "-1px",
                "marginLeft": "9px",
                "textAlign": "center",
                "textDecoration": "none",
                "lineHeight": "30px",
                "letterSpacing": "0.72917px",
                "whiteSpace": "nowrap",
                "color": "#ffffff",
                "fontSize": "30px"
              },
              "text": "提交答案",
              "lines": 1,
              "className": "submit"
            },
            "rect": {
              "x": 318,
              "y": 1198,
              "width": 118,
              "height": 28
            },
            "classNames": [{
              "name": "知识问答",
              "id": "560_91"
            }, {
              "name": "按钮",
              "id": "560_67"
            }],
            "selfId": "layerId-26_0",
            "smart": {
              "layerProtocol": {
                "layout": {
                  "type": "layout",
                  "position": "middle"
                }
              }
            }
          }, {
            "componentName": "Image",
            "id": "440cf782-a261-11eb-9c43-6d4b905f3aec",
            "props": {
              "style": {
                "marginLeft": "6px",
                "width": "17px",
                "height": "19px",
                "overflow": "hidden"
              },
              "src": "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/3710afe0a26111eb91c1fdd3a4e04af6.png",
              "className": "icon-1"
            },
            "rect": {
              "x": 442,
              "y": 1203,
              "width": 17,
              "height": 19
            },
            "classNames": [{
              "name": "知识问答",
              "id": "560_91"
            }, {
              "name": "按钮",
              "id": "560_67"
            }],
            "selfId": "layerId-64",
            "smart": {
              "layerProtocol": {
                "layout": {
                  "type": "layout",
                  "position": "right"
                }
              }
            }
          }]
        }]
      }, {
        "componentName": "Div",
        "id": "e23e2930-e6a1-4e78-9dce-d99091ae44b6",
        "props": {
          "style": {
            "display": "flex",
            "position": "relative",
            "alignItems": "flex-start",
            "flexDirection": "column",
            "marginTop": "14px",
            "backgroundColor": "#eb2b55",
            "width": "632px",
            "height": "826px",
            "overflow": "hidden"
          },
          "className": "wrapper-inner-1"
        },
        "rect": {
          "x": 60,
          "y": 321,
          "width": 632,
          "height": 826
        },
        "classNames": [{
          "name": "知识问答",
          "id": "560_91"
        }, {
          "name": "UIBG",
          "id": "560_7"
        }],
        "selfId": "layerId-6",
        "children": [{
          "componentName": "Div",
          "id": "af37b269-d381-41e7-84b6-958ca9e19965",
          "props": {
            "style": {
              "display": "flex",
              "position": "relative",
              "alignItems": "center",
              "alignSelf": "center",
              "flexDirection": "row",
              "marginTop": "66px"
            },
            "className": "group-i0"
          },
          "rect": {
            "x": 108,
            "y": 387,
            "width": 518,
            "height": 41
          },
          "children": [{
            "componentName": "Image",
            "id": "440d1e93-a261-11eb-9c43-6d4b905f3aec",
            "props": {
              "style": {
                "marginTop": "-2px",
                "marginRight": "18px",
                "width": "23px",
                "height": "23px",
                "overflow": "hidden"
              },
              "src": "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/35e9e320a26111eb9d9221f5eab7fcfd.png",
              "className": "icon-2"
            },
            "rect": {
              "x": 108,
              "y": 395,
              "width": 23,
              "height": 23
            },
            "classNames": [{
              "name": "知识问答",
              "id": "560_91"
            }, {
              "name": "圆",
              "id": "560_34"
            }],
            "selfId": "layerId-33",
            "smart": {
              "layerProtocol": {
                "layout": {
                  "type": "layout",
                  "position": "left"
                }
              }
            }
          }, {
            "componentName": "Text",
            "id": "440d45a0-a261-11eb-9c43-6d4b905f3aec",
            "props": {
              "style": {
                "WebkitBoxOrient": "vertical",
                "display": "-webkit-inline-box",
                "WebkitLineClamp": 2,
                "width": "477px",
                "height": "41px",
                "overflow": "hidden",
                "textAlign": "center",
                "textDecoration": "none",
                "textOverflow": "ellipsis",
                "lineHeight": "21px",
                "letterSpacing": "0px",
                "whiteSpace": "normal",
                "color": "#ffffff",
                "fontSize": "38px"
              },
              "text": "LPL是哪年夺冠的 (分值:5分）",
              "lines": 2,
              "className": "title-1"
            },
            "rect": {
              "x": 149,
              "y": 387,
              "width": 477,
              "height": 41
            },
            "classNames": [{
              "name": "知识问答",
              "id": "560_91"
            }, {
              "name": "题目",
              "id": "560_10"
            }],
            "selfId": "layerId-5_0",
            "smart": {
              "layerProtocol": {
                "layout": {
                  "type": "layout",
                  "position": "right"
                }
              }
            }
          }],
          "smart": {
            "layerProtocol": {
              "repeat": {
                "type": "repeat",
                "repeatId": "1618982427408102",
                "repeatIndex": "0"
              }
            }
          }
        }, {
          "componentName": "Div",
          "id": "84240eef-2e36-4a62-8a60-cf9729f6eb35",
          "props": {
            "style": {
              "display": "flex",
              "position": "relative",
              "alignItems": "center",
              "flexDirection": "row",
              "marginTop": "43px",
              "marginLeft": "95px"
            },
            "className": "group-i0-1"
          },
          "rect": {
            "x": 155,
            "y": 471,
            "width": 193,
            "height": 35
          },
          "children": [{
            "componentName": "Image",
            "id": "440d1e97-a261-11eb-9c43-6d4b905f3aec",
            "props": {
              "style": {
                "marginRight": "19px",
                "width": "35px",
                "height": "35px",
                "overflow": "hidden"
              },
              "src": "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/352b2700a26111eb91c1fdd3a4e04af6.png",
              "className": "icon-search"
            },
            "rect": {
              "x": 155,
              "y": 471,
              "width": 35,
              "height": 35
            },
            "classNames": [{
              "name": "知识问答",
              "id": "560_91"
            }, {
              "name": "答案选项圆1",
              "id": "560_22"
            }],
            "selfId": "layerId-21",
            "smart": {
              "nodeIdentification": {
                "fieldBind": ["search"]
              },
              "nodeCustom": {
                "fieldBind": {
                  "confidential": 0.5810645818710327,
                  "isConfident": true,
                  "label": "search",
                  "type": "fieldBind"
                }
              },
              "layerProtocol": {
                "field": {
                  "type": "search"
                },
                "layout": {
                  "type": "layout",
                  "position": "left"
                }
              }
            }
          }, {
            "componentName": "Text",
            "id": "440d1e9a-a261-11eb-9c43-6d4b905f3aec",
            "props": {
              "style": {
                "marginTop": "-3px",
                "textAlign": "center",
                "textDecoration": "none",
                "lineHeight": "30px",
                "letterSpacing": "0px",
                "whiteSpace": "nowrap",
                "color": "#ffffff",
                "fontSize": "30px"
              },
              "text": "A：2016年",
              "lines": 1,
              "className": "caption-1"
            },
            "rect": {
              "x": 209,
              "y": 473,
              "width": 139,
              "height": 28
            },
            "classNames": [{
              "name": "知识问答",
              "id": "560_91"
            }, {
              "name": "选项1",
              "id": "560_13"
            }],
            "selfId": "layerId-6_0",
            "smart": {
              "layerProtocol": {
                "layout": {
                  "type": "layout",
                  "position": "right"
                }
              }
            }
          }],
          "smart": {
            "layerProtocol": {
              "repeat": {
                "type": "repeat",
                "repeatId": "1618982427408463",
                "repeatIndex": "0"
              }
            }
          }
        }, {
          "componentName": "Div",
          "id": "e2587a47-7af3-451b-9a34-68cc5d0becc0",
          "props": {
            "style": {
              "display": "flex",
              "position": "relative",
              "alignItems": "center",
              "flexDirection": "row",
              "marginTop": "28px",
              "marginLeft": "95px"
            },
            "className": "group-i1"
          },
          "rect": {
            "x": 155,
            "y": 534,
            "width": 194,
            "height": 35
          },
          "children": [{
            "componentName": "Image",
            "id": "440d1e96-a261-11eb-9c43-6d4b905f3aec",
            "props": {
              "style": {
                "marginRight": "21px",
                "width": "35px",
                "height": "35px",
                "overflow": "hidden"
              },
              "src": "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/3555e080a26111eb91c1fdd3a4e04af6.png",
              "className": "icon-search-1"
            },
            "rect": {
              "x": 155,
              "y": 534,
              "width": 35,
              "height": 35
            },
            "classNames": [{
              "name": "知识问答",
              "id": "560_91"
            }, {
              "name": "答案选项圆2",
              "id": "560_25"
            }],
            "selfId": "layerId-24",
            "smart": {
              "nodeIdentification": {
                "fieldBind": ["search"]
              },
              "nodeCustom": {
                "fieldBind": {
                  "confidential": 0.5810645818710327,
                  "isConfident": true,
                  "label": "search",
                  "type": "fieldBind"
                }
              },
              "layerProtocol": {
                "field": {
                  "type": "search"
                },
                "layout": {
                  "type": "layout",
                  "position": "left"
                }
              }
            }
          }, {
            "componentName": "Text",
            "id": "440d1e99-a261-11eb-9c43-6d4b905f3aec",
            "props": {
              "style": {
                "marginTop": "1px",
                "textAlign": "center",
                "textDecoration": "none",
                "lineHeight": "30px",
                "letterSpacing": "0px",
                "whiteSpace": "nowrap",
                "color": "#ffffff",
                "fontSize": "30px"
              },
              "text": "B：2017年",
              "lines": 1,
              "className": "title-2"
            },
            "rect": {
              "x": 211,
              "y": 538,
              "width": 138,
              "height": 28
            },
            "classNames": [{
              "name": "知识问答",
              "id": "560_91"
            }, {
              "name": "选项2",
              "id": "560_16"
            }],
            "selfId": "layerId-7_0",
            "smart": {
              "layerProtocol": {
                "layout": {
                  "type": "layout",
                  "position": "right"
                }
              }
            }
          }],
          "smart": {
            "layerProtocol": {
              "repeat": {
                "type": "repeat",
                "repeatId": "1618982427408463",
                "repeatIndex": "1"
              }
            }
          }
        }, {
          "componentName": "Div",
          "id": "cb60804a-7a93-4b8d-81bb-84b730d1450d",
          "props": {
            "style": {
              "display": "flex",
              "position": "relative",
              "alignItems": "center",
              "flexDirection": "row",
              "marginTop": "30px",
              "marginLeft": "95px"
            },
            "className": "group-i2"
          },
          "rect": {
            "x": 155,
            "y": 599,
            "width": 194,
            "height": 35
          },
          "children": [{
            "componentName": "Div",
            "id": "48e9d65c-3195-4a85-8ad3-b87b47f8cf17",
            "props": {
              "style": {
                "display": "flex",
                "alignItems": "center",
                "flexDirection": "row",
                "justifyContent": "center",
                "marginRight": "20px",
                "backgroundSize": "contain",
                "backgroundImage": "url(https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/358024d0a26111ebbd29070c9a6bc899.png)",
                "width": "35px",
                "height": "35px",
                "overflow": "hidden"
              },
              "src": "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/358024d0a26111ebbd29070c9a6bc899.png",
              "className": "view"
            },
            "rect": {
              "x": 155,
              "y": 599,
              "width": 35,
              "height": 35
            },
            "classNames": [{
              "name": "知识问答",
              "id": "560_91"
            }, {
              "name": "答案选项圆3",
              "id": "560_28"
            }],
            "selfId": "layerId-27",
            "smart": {
              "nodeIdentification": {
                "fieldBind": ["search"]
              },
              "nodeCustom": {
                "fieldBind": {
                  "confidential": 0.5810645818710327,
                  "isConfident": true,
                  "label": "search",
                  "type": "fieldBind"
                }
              },
              "layerProtocol": {
                "field": {
                  "type": "search"
                },
                "layout": {
                  "type": "layout",
                  "position": "left"
                }
              }
            },
            "children": [{
              "componentName": "Image",
              "id": "440d1e94-a261-11eb-9c43-6d4b905f3aec",
              "props": {
                "style": {
                  "width": "23px",
                  "height": "23px",
                  "overflow": "hidden"
                },
                "src": "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/35ac3de0a26111eb87dd518891254080.png",
                "className": "icon-3"
              },
              "rect": {
                "x": 161,
                "y": 605,
                "width": 23,
                "height": 23
              },
              "classNames": [{
                "name": "知识问答",
                "id": "560_91"
              }, {
                "name": "答案选择点",
                "id": "560_31"
              }],
              "selfId": "layerId-30"
            }]
          }, {
            "componentName": "Text",
            "id": "440d1e98-a261-11eb-9c43-6d4b905f3aec",
            "props": {
              "style": {
                "marginTop": "1px",
                "textAlign": "center",
                "textDecoration": "none",
                "lineHeight": "30px",
                "letterSpacing": "0px",
                "whiteSpace": "nowrap",
                "color": "#ffffff",
                "fontSize": "30px"
              },
              "text": "C：2018年",
              "lines": 1,
              "className": "caption-2"
            },
            "rect": {
              "x": 210,
              "y": 603,
              "width": 139,
              "height": 28
            },
            "classNames": [{
              "name": "知识问答",
              "id": "560_91"
            }, {
              "name": "选项3",
              "id": "560_19"
            }],
            "selfId": "layerId-8_0",
            "smart": {
              "layerProtocol": {
                "layout": {
                  "type": "layout",
                  "position": "right"
                }
              }
            }
          }],
          "smart": {
            "layerProtocol": {
              "repeat": {
                "type": "repeat",
                "repeatId": "1618982427408463",
                "repeatIndex": "2"
              }
            }
          }
        }, {
          "componentName": "Div",
          "id": "c6f67067-c9ad-4d5f-9763-6d3339490e4d",
          "props": {
            "style": {
              "display": "flex",
              "position": "relative",
              "alignItems": "center",
              "alignSelf": "center",
              "flexDirection": "row",
              "marginTop": "122px"
            },
            "className": "group-i1-1"
          },
          "rect": {
            "x": 108,
            "y": 756,
            "width": 518,
            "height": 41
          },
          "children": [{
            "componentName": "Image",
            "id": "440cf784-a261-11eb-9c43-6d4b905f3aec",
            "props": {
              "style": {
                "marginTop": "-2px",
                "marginRight": "18px",
                "width": "23px",
                "height": "23px",
                "overflow": "hidden"
              },
              "src": "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/36e421a0a26111eb87dd518891254080.png",
              "className": "icon-4"
            },
            "rect": {
              "x": 108,
              "y": 764,
              "width": 23,
              "height": 23
            },
            "classNames": [{
              "name": "知识问答",
              "id": "560_91"
            }, {
              "name": "圆 拷贝",
              "id": "560_61"
            }],
            "selfId": "layerId-60",
            "smart": {
              "layerProtocol": {
                "layout": {
                  "type": "layout",
                  "position": "left"
                }
              }
            }
          }, {
            "componentName": "Text",
            "id": "440d1e92-a261-11eb-9c43-6d4b905f3aec",
            "props": {
              "style": {
                "WebkitBoxOrient": "vertical",
                "display": "-webkit-inline-box",
                "WebkitLineClamp": 2,
                "width": "477px",
                "height": "41px",
                "overflow": "hidden",
                "textAlign": "center",
                "textDecoration": "none",
                "textOverflow": "ellipsis",
                "lineHeight": "21px",
                "letterSpacing": "0px",
                "whiteSpace": "normal",
                "color": "#ffffff",
                "fontSize": "38px"
              },
              "text": "LPL是哪年夺冠的 (分值:5分）",
              "lines": 2,
              "className": "title-3"
            },
            "rect": {
              "x": 149,
              "y": 756,
              "width": 477,
              "height": 41
            },
            "classNames": [{
              "name": "知识问答",
              "id": "560_91"
            }, {
              "name": "题目 拷贝",
              "id": "560_37"
            }],
            "selfId": "layerId-14_0",
            "smart": {
              "layerProtocol": {
                "layout": {
                  "type": "layout",
                  "position": "right"
                }
              }
            }
          }],
          "smart": {
            "layerProtocol": {
              "repeat": {
                "type": "repeat",
                "repeatId": "1618982427408102",
                "repeatIndex": "1"
              },
              "component": {
                "type": "segmentedControl"
              }
            },
            "nodeIdentification": {
              "baseComponent": ["segmentedControl"]
            },
            "nodeCustom": {
              "baseComponent": {
                "isConfident": true,
                "label": "segmentedControl",
                "score": 0.9996063113212585,
                "type": "baseComponent",
                "meta": {
                  "threshold": 0.99
                },
                "rect": {
                  "x": 108,
                  "y": 756,
                  "width": 518,
                  "height": 41
                },
                "id": "c6f67067-c9ad-4d5f-9763-6d3339490e4d",
                "selfId": null
              }
            }
          }
        }, {
          "componentName": "Div",
          "id": "7f4d8cd7-47f4-4307-bb71-25233ab1f927",
          "props": {
            "style": {
              "display": "flex",
              "position": "relative",
              "alignItems": "center",
              "flexDirection": "row",
              "marginTop": "43px",
              "marginLeft": "95px"
            },
            "className": "group-i3"
          },
          "rect": {
            "x": 155,
            "y": 840,
            "width": 193,
            "height": 35
          },
          "children": [{
            "componentName": "Image",
            "id": "440cf788-a261-11eb-9c43-6d4b905f3aec",
            "props": {
              "style": {
                "marginRight": "19px",
                "width": "35px",
                "height": "35px",
                "overflow": "hidden"
              },
              "src": "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/36144e80a26111eb8b2a430de88a28dc.png",
              "className": "icon-search-2"
            },
            "rect": {
              "x": 155,
              "y": 840,
              "width": 35,
              "height": 35
            },
            "classNames": [{
              "name": "知识问答",
              "id": "560_91"
            }, {
              "name": "答案选项圆1 拷贝",
              "id": "560_49"
            }],
            "selfId": "layerId-48",
            "smart": {
              "nodeIdentification": {
                "fieldBind": ["search"]
              },
              "nodeCustom": {
                "fieldBind": {
                  "confidential": 0.5810645818710327,
                  "isConfident": true,
                  "label": "search",
                  "type": "fieldBind"
                }
              },
              "layerProtocol": {
                "field": {
                  "type": "search"
                },
                "layout": {
                  "type": "layout",
                  "position": "left"
                }
              }
            }
          }, {
            "componentName": "Text",
            "id": "440d1e91-a261-11eb-9c43-6d4b905f3aec",
            "props": {
              "style": {
                "marginTop": "-3px",
                "textAlign": "center",
                "textDecoration": "none",
                "lineHeight": "30px",
                "letterSpacing": "0px",
                "whiteSpace": "nowrap",
                "color": "#ffffff",
                "fontSize": "30px"
              },
              "text": "A：2016年",
              "lines": 1,
              "className": "caption-3"
            },
            "rect": {
              "x": 209,
              "y": 842,
              "width": 139,
              "height": 28
            },
            "classNames": [{
              "name": "知识问答",
              "id": "560_91"
            }, {
              "name": "选项1 拷贝",
              "id": "560_40"
            }],
            "selfId": "layerId-15_0",
            "smart": {
              "layerProtocol": {
                "layout": {
                  "type": "layout",
                  "position": "right"
                }
              }
            }
          }],
          "smart": {
            "layerProtocol": {
              "repeat": {
                "type": "repeat",
                "repeatId": "1618982427408463",
                "repeatIndex": "3"
              }
            }
          }
        }, {
          "componentName": "Div",
          "id": "99be63a1-7a40-4d8e-b9b1-50e49589e207",
          "props": {
            "style": {
              "display": "flex",
              "position": "relative",
              "alignItems": "center",
              "flexDirection": "row",
              "marginTop": "28px",
              "marginLeft": "95px"
            },
            "className": "group-i4"
          },
          "rect": {
            "x": 155,
            "y": 903,
            "width": 194,
            "height": 35
          },
          "children": [{
            "componentName": "Image",
            "id": "440cf787-a261-11eb-9c43-6d4b905f3aec",
            "props": {
              "style": {
                "marginRight": "21px",
                "width": "35px",
                "height": "35px",
                "overflow": "hidden"
              },
              "src": "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/36468210a26111eba3f49d9964540290.png",
              "className": "icon-search-3"
            },
            "rect": {
              "x": 155,
              "y": 903,
              "width": 35,
              "height": 35
            },
            "classNames": [{
              "name": "知识问答",
              "id": "560_91"
            }, {
              "name": "答案选项圆2 拷贝",
              "id": "560_52"
            }],
            "selfId": "layerId-51",
            "smart": {
              "nodeIdentification": {
                "fieldBind": ["search"]
              },
              "nodeCustom": {
                "fieldBind": {
                  "confidential": 0.5810645818710327,
                  "isConfident": true,
                  "label": "search",
                  "type": "fieldBind"
                }
              },
              "layerProtocol": {
                "field": {
                  "type": "search"
                },
                "layout": {
                  "type": "layout",
                  "position": "left"
                }
              }
            }
          }, {
            "componentName": "Text",
            "id": "440d1e90-a261-11eb-9c43-6d4b905f3aec",
            "props": {
              "style": {
                "marginTop": "1px",
                "textAlign": "center",
                "textDecoration": "none",
                "lineHeight": "30px",
                "letterSpacing": "0px",
                "whiteSpace": "nowrap",
                "color": "#ffffff",
                "fontSize": "30px"
              },
              "text": "B：2017年",
              "lines": 1,
              "className": "title-4"
            },
            "rect": {
              "x": 211,
              "y": 907,
              "width": 138,
              "height": 28
            },
            "classNames": [{
              "name": "知识问答",
              "id": "560_91"
            }, {
              "name": "选项2 拷贝",
              "id": "560_43"
            }],
            "selfId": "layerId-16_0",
            "smart": {
              "layerProtocol": {
                "layout": {
                  "type": "layout",
                  "position": "right"
                }
              }
            }
          }],
          "smart": {
            "layerProtocol": {
              "repeat": {
                "type": "repeat",
                "repeatId": "1618982427408463",
                "repeatIndex": "4"
              }
            }
          }
        }, {
          "componentName": "Div",
          "id": "bbba9ad2-a007-4a39-a395-318c6b3350cd",
          "props": {
            "style": {
              "display": "flex",
              "position": "relative",
              "alignItems": "center",
              "flexDirection": "row",
              "marginTop": "30px",
              "marginLeft": "95px"
            },
            "className": "group-i5"
          },
          "rect": {
            "x": 155,
            "y": 968,
            "width": 194,
            "height": 35
          },
          "children": [{
            "componentName": "Div",
            "id": "74a5cf2b-ab79-42f1-8d8b-6cd48658c42e",
            "props": {
              "style": {
                "display": "flex",
                "alignItems": "center",
                "flexDirection": "row",
                "justifyContent": "center",
                "marginRight": "20px",
                "backgroundSize": "contain",
                "backgroundImage": "url(https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/367903c0a26111eb91c1fdd3a4e04af6.png)",
                "width": "35px",
                "height": "35px",
                "overflow": "hidden"
              },
              "src": "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/367903c0a26111eb91c1fdd3a4e04af6.png",
              "className": "view-1"
            },
            "rect": {
              "x": 155,
              "y": 968,
              "width": 35,
              "height": 35
            },
            "classNames": [{
              "name": "知识问答",
              "id": "560_91"
            }, {
              "name": "答案选项圆3 拷贝",
              "id": "560_55"
            }],
            "selfId": "layerId-54",
            "smart": {
              "nodeIdentification": {
                "fieldBind": ["search"]
              },
              "nodeCustom": {
                "fieldBind": {
                  "confidential": 0.5810645818710327,
                  "isConfident": true,
                  "label": "search",
                  "type": "fieldBind"
                }
              },
              "layerProtocol": {
                "field": {
                  "type": "search"
                },
                "layout": {
                  "type": "layout",
                  "position": "left"
                }
              }
            },
            "children": [{
              "componentName": "Image",
              "id": "440cf785-a261-11eb-9c43-6d4b905f3aec",
              "props": {
                "style": {
                  "width": "23px",
                  "height": "23px",
                  "overflow": "hidden"
                },
                "src": "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/36a60730a26111eb91bf2b62ae51e7f0.png",
                "className": "icon-5"
              },
              "rect": {
                "x": 161,
                "y": 974,
                "width": 23,
                "height": 23
              },
              "classNames": [{
                "name": "知识问答",
                "id": "560_91"
              }, {
                "name": "答案选择点 拷贝",
                "id": "560_58"
              }],
              "selfId": "layerId-57"
            }]
          }, {
            "componentName": "Text",
            "id": "440cf789-a261-11eb-9c43-6d4b905f3aec",
            "props": {
              "style": {
                "marginTop": "1px",
                "textAlign": "center",
                "textDecoration": "none",
                "lineHeight": "30px",
                "letterSpacing": "0px",
                "whiteSpace": "nowrap",
                "color": "#ffffff",
                "fontSize": "30px"
              },
              "text": "C：2018年",
              "lines": 1,
              "className": "caption-4"
            },
            "rect": {
              "x": 210,
              "y": 972,
              "width": 139,
              "height": 28
            },
            "classNames": [{
              "name": "知识问答",
              "id": "560_91"
            }, {
              "name": "选项3 拷贝",
              "id": "560_46"
            }],
            "selfId": "layerId-17_0",
            "smart": {
              "layerProtocol": {
                "layout": {
                  "type": "layout",
                  "position": "right"
                }
              }
            }
          }],
          "smart": {
            "layerProtocol": {
              "repeat": {
                "type": "repeat",
                "repeatId": "1618982427408463",
                "repeatIndex": "5"
              }
            }
          }
        }]
      }]
    }, {
      "componentName": "Div",
      "id": "4a9d4f3c-5c8c-4b8e-9b8c-0fead967648c",
      "props": {
        "style": {
          "display": "flex",
          "position": "absolute",
          "top": "0px",
          "right": "67px",
          "alignItems": "center",
          "flexDirection": "row",
          "backgroundColor": "#ffffff",
          "width": "524px",
          "height": "607px",
          "overflow": "hidden"
        },
        "className": "wrapper"
      },
      "rect": {
        "x": 114,
        "y": 286,
        "width": 524,
        "height": 607
      },
      "classNames": [{
        "name": "知识问答",
        "id": "560_91"
      }, {
        "name": "MBBG",
        "id": "560_90"
      }],
      "selfId": "layerId-78",
      "children": [{
        "componentName": "Div",
        "id": "440cd073-a261-11eb-9c43-6d4b905f3aec",
        "props": {
          "style": {
            "position": "absolute",
            "top": "12px",
            "left": "17px",
            "borderWidth": "2px",
            "borderStyle": "solid",
            "borderColor": "rgba(221.000002026558,221.000002026558,221.000002026558,1)",
            "backgroundColor": "#ffffff",
            "width": "490px",
            "height": "583px",
            "overflow": "hidden"
          },
          "className": "overlayer"
        },
        "rect": {
          "x": 131,
          "y": 298,
          "width": 490,
          "height": 583
        },
        "classNames": [{
          "name": "知识问答",
          "id": "560_91"
        }, {
          "name": "MBBG",
          "id": "560_90"
        }],
        "selfId": "layerId-79"
      }, {
        "componentName": "Div",
        "id": "4f443c08-562b-48ea-8848-4f4faf833089",
        "props": {
          "style": {
            "display": "flex",
            "position": "relative",
            "alignItems": "center",
            "flexDirection": "column",
            "marginTop": "1px",
            "marginLeft": "10px",
            "borderWidth": "2px",
            "borderStyle": "solid",
            "borderColor": "rgba(221.000002026558,221.000002026558,221.000002026558,1)",
            "width": "505px",
            "height": "566px",
            "overflow": "hidden",
            "lineHeight": "38px",
            "whiteSpace": "nowrap"
          },
          "className": "wrapper-inner-2"
        },
        "rect": {
          "x": 124,
          "y": 307,
          "width": 505,
          "height": 566
        },
        "classNames": [{
          "name": "知识问答",
          "id": "560_91"
        }, {
          "name": "MBBG",
          "id": "560_90"
        }],
        "selfId": "layerId-80",
        "children": [{
          "componentName": "Text",
          "id": "440cd071-a261-11eb-9c43-6d4b905f3aec",
          "props": {
            "style": {
              "position": "relative",
              "marginTop": "139px",
              "maxWidth": "493px",
              "height": "36px",
              "overflow": "hidden",
              "textAlign": "center",
              "textDecoration": "none",
              "textOverflow": "ellipsis",
              "letterSpacing": "0.9375px",
              "color": "#000000",
              "fontSize": "38px"
            },
            "text": "恭喜你答对3道题",
            "lines": 1,
            "className": "title-5"
          },
          "rect": {
            "x": 230,
            "y": 448,
            "width": 288,
            "height": 36
          },
          "classNames": [{
            "name": "知识问答",
            "id": "560_91"
          }, {
            "name": "MBBG",
            "id": "560_90"
          }, {
            "name": "积分领取字",
            "id": "560_83"
          }],
          "selfId": "layerId-35_0"
        }, {
          "componentName": "Text",
          "id": "440cd070-a261-11eb-9c43-6d4b905f3aec",
          "props": {
            "style": {
              "position": "relative",
              "marginTop": "2px",
              "maxWidth": "493px",
              "height": "36px",
              "overflow": "hidden",
              "textAlign": "center",
              "textDecoration": "none",
              "textOverflow": "ellipsis",
              "letterSpacing": "0.9375px",
              "color": "#000000",
              "fontSize": "38px"
            },
            "text": "点击“领取积分”获取",
            "lines": 1,
            "className": "caption-5"
          },
          "rect": {
            "x": 184,
            "y": 486,
            "width": 382,
            "height": 36
          },
          "classNames": [{
            "name": "知识问答",
            "id": "560_91"
          }, {
            "name": "MBBG",
            "id": "560_90"
          }, {
            "name": "积分领取字",
            "id": "560_83"
          }],
          "selfId": "layerId-35_1"
        }, {
          "componentName": "Text",
          "id": "440ca964-a261-11eb-9c43-6d4b905f3aec",
          "props": {
            "style": {
              "position": "relative",
              "marginTop": "1px",
              "maxWidth": "493px",
              "height": "35px",
              "overflow": "hidden",
              "textAlign": "center",
              "textDecoration": "none",
              "textOverflow": "ellipsis",
              "letterSpacing": "0.9375px",
              "color": "#000000",
              "fontSize": "38px"
            },
            "text": "相应积分",
            "lines": 1,
            "className": "title-6"
          },
          "rect": {
            "x": 299,
            "y": 523,
            "width": 151,
            "height": 35
          },
          "classNames": [{
            "name": "知识问答",
            "id": "560_91"
          }, {
            "name": "MBBG",
            "id": "560_90"
          }, {
            "name": "积分领取字",
            "id": "560_83"
          }],
          "selfId": "layerId-35_2"
        }, {
          "componentName": "Div",
          "id": "e8864c57-77d0-46d4-a001-ac310e4f20d4",
          "props": {
            "style": {
              "boxSizing": "border-box",
              "display": "flex",
              "position": "relative",
              "alignItems": "center",
              "flexDirection": "row",
              "marginTop": "206px",
              "backgroundColor": "#ffffff",
              "backgroundImage": "linear-gradient(to top, rgb(255,87,111), rgb(236,44,86))",
              "paddingRight": "17px",
              "paddingLeft": "16px",
              "height": "73px",
              "overflow": "hidden",
              "lineHeight": "normal",
              "whiteSpace": "normal"
            },
            "className": "group-1"
          },
          "rect": {
            "x": 263,
            "y": 764,
            "width": 226,
            "height": 73
          },
          "classNames": [{
            "name": "知识问答",
            "id": "560_91"
          }, {
            "name": "MBBG",
            "id": "560_90"
          }, {
            "name": "按钮",
            "id": "560_89"
          }],
          "selfId": "layerId-85",
          "children": [{
            "componentName": "Image",
            "id": "440ca961-a261-11eb-9c43-6d4b905f3aec",
            "props": {
              "style": {
                "marginTop": "-1px",
                "width": "20px",
                "height": "22px",
                "overflow": "hidden"
              },
              "src": "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/37e87240a26111eb87dd518891254080.png",
              "className": "icon-6"
            },
            "rect": {
              "x": 279,
              "y": 789,
              "width": 20,
              "height": 22
            },
            "classNames": [{
              "name": "知识问答",
              "id": "560_91"
            }, {
              "name": "MBBG",
              "id": "560_90"
            }, {
              "name": "按钮",
              "id": "560_89"
            }],
            "selfId": "layerId-87",
            "smart": {
              "layerProtocol": {
                "layout": {
                  "type": "layout",
                  "position": "left"
                }
              }
            }
          }, {
            "componentName": "Text",
            "id": "440ca960-a261-11eb-9c43-6d4b905f3aec",
            "props": {
              "style": {
                "marginTop": "-1px",
                "marginLeft": "9px",
                "textAlign": "center",
                "textDecoration": "none",
                "lineHeight": "34px",
                "letterSpacing": "0.85px",
                "whiteSpace": "nowrap",
                "color": "#ffffff",
                "fontSize": "34px"
              },
              "text": "领取积分",
              "lines": 1,
              "className": "collect"
            },
            "rect": {
              "x": 308,
              "y": 784,
              "width": 134,
              "height": 32
            },
            "classNames": [{
              "name": "知识问答",
              "id": "560_91"
            }, {
              "name": "MBBG",
              "id": "560_90"
            }, {
              "name": "按钮",
              "id": "560_89"
            }],
            "selfId": "layerId-39_0",
            "smart": {
              "layerProtocol": {
                "layout": {
                  "type": "layout",
                  "position": "middle"
                }
              }
            }
          }, {
            "componentName": "Image",
            "id": "440ca962-a261-11eb-9c43-6d4b905f3aec",
            "props": {
              "style": {
                "marginTop": "-1px",
                "marginLeft": "10px",
                "width": "20px",
                "height": "22px",
                "overflow": "hidden"
              },
              "src": "https://ai-sample.oss-cn-hangzhou.aliyuncs.com/test/37bf8d80a26111eb89bc1da52a1a523d.png",
              "className": "icon-7"
            },
            "rect": {
              "x": 452,
              "y": 789,
              "width": 20,
              "height": 22
            },
            "classNames": [{
              "name": "知识问答",
              "id": "560_91"
            }, {
              "name": "MBBG",
              "id": "560_90"
            }, {
              "name": "按钮",
              "id": "560_89"
            }],
            "selfId": "layerId-86",
            "smart": {
              "layerProtocol": {
                "layout": {
                  "type": "layout",
                  "position": "right"
                }
              }
            }
          }],
          "smart": {
            "nodeIdentification": {
              "baseComponent": ["button"]
            },
            "nodeCustom": {
              "baseComponent": {
                "isConfident": true,
                "label": "button",
                "score": 1.4999998807907104,
                "type": "baseComponent",
                "meta": {
                  "threshold": 0.99
                },
                "rect": {
                  "x": 263,
                  "y": 764,
                  "width": 226,
                  "height": 73
                },
                "id": "e8864c57-77d0-46d4-a001-ac310e4f20d4",
                "selfId": "layerId-85"
              }
            },
            "layerProtocol": {
              "component": {
                "type": "button"
              }
            }
          }
        }]
      }]
    }],
    "smart": {
      "layerProtocol": {
        "module": {
          "type": "smartModule",
          "params": {
            "moduleName": "list"
          }
        }
      }
    }
  }],
  "imgcook": {
    "restore_id": "24b4e46c-9ed5-452b-a3cc-774d59af69d5"
  }
}