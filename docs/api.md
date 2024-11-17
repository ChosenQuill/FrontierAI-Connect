
/api/suggestions
Input: preferences
Output: string

{
  "recommendations": [
    {
      "type": "network_troubleshooting",
      "input": {
        "customer_query": "My internet feels very slow. How can I make it faster?",
        "customer_data": {
          "acct_id": "54321",
          "extenders": 0,
          "wireless_clients_count": 20,
          "wired_clients_count": 5,
          "rx_avg_bps": 20000000,
          "tx_avg_bps": 15000000,
          "rssi_mean": -65,
          "network_speed": "500M",
          "whole_home_wifi": false,
          "wifi_security": true,
          "city": "San Diego",
          "state": "CA"
        }
      },
      "output": {
        "recommendations": [
          {
            "issue_detected": "Network speed below expected levels",
            "description": "Your network is performing below its expected speed. This may be caused by high device usage or suboptimal Wi-Fi conditions.",
            "solutions": [
              "Limit the number of connected devices during peak usage times.",
              "Consider upgrading your current internet plan for higher bandwidth.",
              "Move high-bandwidth devices closer to the router or use a wired connection where possible."
            ]
          },
          {
            "product_recommendation": {
              "product_name": "Fiber 1 Gig",
              "features": "1Gbps Connection with one standard Wi-Fi router to support high usage.",
              "price": "$65/mo"
            }
          }
        ]
      }
    },
    {
      "type": "network_troubleshooting",
      "input": {
        "customer_query": "I keep losing connection on my Wi-Fi. How can I improve the signal strength?",
        "customer_data": {
          "acct_id": "67890",
          "extenders": 1,
          "wireless_clients_count": 15,
          "rssi_mean": -75,
          "rssi_max": -70,
          "rssi_min": -80,
          "network_speed": "1G",
          "whole_home_wifi": true,
          "city": "Miami",
          "state": "FL"
        }
      },
      "output": {
        "recommendations": [
          {
            "issue_detected": "Low Wi-Fi signal strength (poor RSSI)",
            "description": "The average signal strength in your network indicates poor connectivity, which may cause disconnections or slow speeds.",
            "solutions": [
              "Relocate your Wi-Fi extender to a more central location to boost signal strength.",
              "Consider adding an additional extender to cover more areas of your home.",
              "Reduce physical obstructions like walls or large objects between your router/extender and devices."
            ]
          },
          {
            "product_recommendation": {
              "product_name": "Additional Extender",
              "features": "Improves Wi-Fi coverage and signal strength throughout your home.",
              "price": "$5/mo per extender"
            }
          }
        ]
      }
    },
    {
      "type": "network_troubleshooting",
      "input": {
        "customer_query": "Why do I experience buffering when streaming videos?",
        "customer_data": {
          "acct_id": "11223",
          "extenders": 2,
          "wireless_clients_count": 10,
          "rx_avg_bps": 80000000,
          "tx_avg_bps": 60000000,
          "rx_p95_bps": 100000000,
          "tx_p95_bps": 90000000,
          "rssi_mean": -60,
          "network_speed": "2G",
          "city": "Chicago",
          "state": "IL"
        }
      },
      "output": {
        "recommendations": [
          {
            "issue_detected": "Buffering during streaming",
            "description": "Your average and 95th percentile bandwidth usage suggests high activity levels. Buffering may occur due to limited throughput availability.",
            "solutions": [
              "Check if other high-bandwidth devices are in use while streaming and reduce concurrent usage.",
              "Consider using a wired connection for your streaming device to improve stability.",
              "Upgrade your internet plan if multiple devices require high-speed streaming simultaneously."
            ]
          },
          {
            "product_recommendation": {
              "product_name": "Fiber 5 Gig",
              "features": "5Gbps Connection with a premium router for seamless high-speed streaming.",
              "price": "$129/mo"
            }
          }
        ]
      }
    },
    {
      "type": "network_troubleshooting",
      "input": {
        "customer_query": "I am experiencing lag when playing online games. How can I fix this?",
        "customer_data": {
          "acct_id": "33445",
          "extenders": 0,
          "wired_clients_count": 1,
          "rx_max_bps": 200000000,
          "tx_max_bps": 180000000,
          "network_speed": "1G",
          "whole_home_wifi": false,
          "city": "Dallas",
          "state": "TX"
        }
      },
      "output": {
        "recommendations": [
          {
            "issue_detected": "High latency or lag issues",
            "description": "Lag during gaming may be caused by network congestion or insufficient throughput to meet high data demands.",
            "solutions": [
              "Use a wired connection for gaming if possible.",
              "Reduce the number of devices using the network during gaming sessions.",
              "Consider upgrading to a higher-speed internet plan to handle peak demand more effectively."
            ]
          },
          {
            "product_recommendation": {
              "product_name": "Fiber 2 Gig",
              "features": "2Gbps Connection with one upgraded Wi-Fi router to support demanding activities like gaming.",
              "price": "$99/mo"
            }
          }
        ]
      }
    },
    {
      "type": "product_recommendations",
      "input": {
        "customer_query": "I need a faster internet plan. What are my options?",
        "customer_data": {
          "acct_id": "99887",
          "network_speed": "500M",
          "wireless_clients_count": 15,
          "wired_clients_count": 3,
          "city": "New York",
          "state": "NY"
        }
      },
      "output": {
        "product_recommendations": [
          {
            "product_name": "Fiber 1 Gig",
            "features": "1Gbps Connection with one standard Wi-Fi router for faster speeds and better connectivity.",
            "price": "$65/mo",
            "benefits": "Suitable for high usage households, HD streaming, online gaming, and multiple connected devices."
          },
          {
            "product_name": "Fiber 2 Gig",
            "features": "2Gbps Connection with one upgraded Wi-Fi router and one extender for exceptional coverage.",
            "price": "$99/mo",
            "benefits": "Ideal for very high bandwidth needs, including 4K streaming, heavy file transfers, and smart home devices."
          }
        ]
      }
    },
    {
      "type": "product_recommendations",
      "input": {
        "customer_query": "How can I improve Wi-Fi coverage in my home?",
        "customer_data": {
          "acct_id": "44556",
          "extenders": 0,
          "whole_home_wifi": false,
          "wireless_clients_count": 25,
          "network_speed": "1G",
          "city": "Los Angeles",
          "state": "CA"
        }
      },
      "output": {
        "product_recommendations": [
          {
            "product_name": "Whole-Home Wi-Fi",
            "features": "Includes the latest generation router with up to two additional extenders to maximize coverage.",
            "price": "$10.00/mo",
            "benefits": "Helps eliminate dead spots, drop-offs, and improves signal strength throughout the home."
          },
          {
            "product_name": "Additional Extender",
            "features": "Enhances Wi-Fi coverage by retransmitting the network signal.",
            "price": "$5/mo per extender",
            "benefits": "Great for large homes or homes with challenging layouts."
          }
        ]
      }
    },
    {
      "type": "product_recommendations",
      "input": {
        "customer_query": "I am concerned about network security. What can I do?",
        "customer_data": {
          "acct_id": "33456",
          "wifi_security": false,
          "wifi_security_plus": false,
          "whole_home_wifi": true,
          "city": "Seattle",
          "state": "WA"
        }
      },
      "output": {
        "product_recommendations": [
          {
            "product_name": "Wi-Fi Security",
            "features": "Advanced security managed via the app with parental controls, ad blocking, and browsing protection.",
            "price": "$5.00/mo",
            "benefits": "Protects devices on your home network from malicious sites, phishing, and other threats."
          },
          {
            "product_name": "Wi-Fi Security Plus",
            "features": "Includes Wi-Fi Security with multi-device security, VPN, and a password manager.",
            "price": "$10.00/mo",
            "benefits": "Protects up to 3 devices on the go and offers enhanced privacy and security features."
          }
        ]
      }
    },
    {
      "type": "product
    }
  ]
}

{
  "customer_query": "I have too many devices on my network. How can I make it faster?",
  "customer_data": {
    "acct_id": "789101",
    "extenders": 0,
    "wireless_clients_count": 30,
    "network_speed": "1G",
    "premium_tech_pro": false,
    "city": "Los Angeles",
    "state": "CA"
  }
}

{
  "recommendations": [
    {
      "issue_detected": "High number of wireless devices",
      "description": "Having a large number of wireless devices can slow down your network performance.",
      "solutions": [
        "Consider upgrading to Fiber 2 Gig or Fiber 5 Gig for higher bandwidth.",
        "Add extenders to reduce congestion and improve connectivity."
      ]
    },
    {
      "product_recommendation": {
        "product_name": "Fiber 2 Gig",
        "features": "2Gbps Connection with one upgraded Wi-Fi router and one extender.",
        "price": "$99/mo"
      }
    }
  ]
}

{
  "customer_query": "How can I ensure I have internet during outages?",
  "customer_data": {
    "acct_id": "22990",
    "unbreakable_wifi": false,
    "city": "Orlando",
    "state": "FL"
  }
}

{
  "customer_query": "I want to secure all my devices. What do you recommend?",
  "customer_data": {
    "acct_id": "77654",
    "identity_protection": false,
    "total_shield": false,
    "premium_tech_pro": false,
    "city": "Phoenix",
    "state": "AZ"
  }
}

{
  "product_recommendations": [
    {
      "product_name": "Total Shield",
      "features": "Comprehensive security for up to 10 devices including antivirus protection, VPN, and password manager.",
      "price": "$10.00/mo",
      "benefits": "Provides browsing protection, parental controls, and secure online identity management."
    },
    {
      "product_name": "Identity Protection",
      "features": "Monitors personal data to keep sensitive information from becoming public.",
      "price": "$10.00/mo",
      "benefits": "Includes $1M in identity theft insurance and family add-on options."
    }
  ]
}

{
  "customer_query": "I have weak Wi-Fi signal in some areas of my house. What can I do to improve it?",
  "customer_data": {
    "acct_id": "102938",
    "extenders": 0,
    "wireless_clients_count": 18,
    "rssi_mean": -72,
    "network_speed": "1G",
    "whole_home_wifi": false,
    "city": "Denver",
    "state": "CO"
  }
}

{
  "recommendations": [
    {
      "issue_detected": "Weak Wi-Fi signal in certain areas",
      "description": "The signal strength in some parts of your home may be inadequate, causing slow or intermittent connectivity.",
      "solutions": [
        "Consider adding a Wi-Fi extender to boost the signal in weak areas.",
        "Move your Wi-Fi router to a more central location in your home for better coverage.",
        "Upgrade to Whole-Home Wi-Fi for more consistent and widespread Wi-Fi coverage."
      ]
    },
    {
      "product_recommendation": {
        "product_name": "Whole-Home Wi-Fi",
        "features": "Includes the latest generation router with up to two additional extenders for improved coverage.",
        "price": "$10.00/mo",
        "benefits": "Eliminates dead spots, provides consistent Wi-Fi coverage, and reduces buffering."
      }
    }
  ]
}

{
  "customer_query": "I have too many devices on my Wi-Fi. How can I make it better?",
  "customer_data": {
    "acct_id": "564738",
    "extenders": 1,
    "wireless_clients_count": 30,
    "rssi_mean": -65,
    "network_speed": "500M",
    "whole_home_wifi": true,
    "city": "Boston",
    "state": "MA"
  }
}

{
  "recommendations": [
    {
      "issue_detected": "High number of connected devices",
      "description": "Having many devices connected to Wi-Fi may lead to congestion and reduced performance.",
      "solutions": [
        "Add more extenders to distribute Wi-Fi coverage and reduce congestion.",
        "Ensure your router and extenders are of the latest generation for optimal handling of multiple devices.",
        "Consider upgrading to a faster internet plan to accommodate high usage."
      ]
    },
    {
      "product_recommendation": {
        "product_name": "Fiber 1 Gig",
        "features": "1Gbps Connection with a standard Wi-Fi router.",
        "price": "$65/mo",
        "benefits": "Provides high-speed internet for homes with multiple connected devices."
      }
    }
  ]
}

{
  "customer_query": "My Wi-Fi lags when I stream videos. How can I improve performance?",
  "customer_data": {
    "acct_id": "293847",
    "extenders": 1,
    "wireless_clients_count": 12,
    "rx_avg_bps": 40000000,
    "rssi_mean": -68,
    "network_speed": "2G",
    "whole_home_wifi": true,
    "city": "Atlanta",
    "state": "GA"
  }
}

{
  "recommendations": [
    {
      "issue_detected": "Wi-Fi performance issues during streaming",
      "description": "Streaming may lag due to high bandwidth usage or suboptimal Wi-Fi signal.",
      "solutions": [
        "Check if other devices are consuming bandwidth during streaming and minimize concurrent usage.",
        "Place the Wi-Fi extender closer to your streaming devices to boost signal strength.",
        "Use a wired connection for streaming where possible to eliminate lag."
      ]
    },
    {
      "product_recommendation": {
        "product_name": "Additional Extender",
        "features": "Enhances Wi-Fi coverage and signal strength, reducing buffering and improving streaming quality.",
        "price": "$5/mo per extender",
        "benefits": "Improves Wi-Fi signal in areas with poor connectivity."
      }
    }
  ]
}

{
  "customer_query": "My Wi-Fi coverage is inconsistent in my large home. What can I do?",
  "customer_data": {
    "acct_id": "475869",
    "extenders": 0,
    "wireless_clients_count": 20,
    "network_speed": "1G",
    "whole_home_wifi": false,
    "city": "Houston",
    "state": "TX"
  }
}
