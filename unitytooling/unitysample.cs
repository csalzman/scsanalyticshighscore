using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;

//Level Complete Class
[System.Serializable]
public class levelCompleteJSON {
    public string playerID;
    public string levelName;
    public float completionTime;
    public int collectables;
    public int attemptNum;

    public levelCompleteJSON(string lN, float cT, int c, int aN) {
        levelName = lN;
        completionTime = cT;
        collectables = c;
        attemptNum = aN;
    }
}

public class NetworkRequestScript : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        levelCompleteJSON woo = new levelCompleteJSON("Level name", 10.50f, 5, 10);
        
        StartCoroutine(PostJSON("http://data.scopecreepstudios.com/", "bugdrop/completed", JsonUtility.ToJson(woo)));
    }

    void Update () {
        if(Input.GetKeyDown(KeyCode.R)) {
            levelCompleteJSON woo = new levelCompleteJSON("Level name", 10.00f, 5, 10);

            StartCoroutine(PostJSON("http://data.scopecreepstudios.com/", "bugdrop/completed", JsonUtility.ToJson(woo)));
        }
    }

    IEnumerator PostJSON (string url, string endpoint, string jsonString) {
        //We want to Post, but for REASONS we have to create it as a Put request first
        //See this thread: https://forum.unity.com/threads/unitywebrequest-post-url-jsondata-sending-broken-json.414708/
        //Check into https://github.com/proyecto26/RestClient
        UnityWebRequest www = UnityWebRequest.Put(url + endpoint, jsonString);
        www.SetRequestHeader("Content-Type", "application/json");

        //Change it back to a Post
        www.method = "Post";

        //Send the request
        yield return www.SendWebRequest();

        //Log if we got an error
        if (www.isNetworkError || www.isHttpError) {
            Debug.Log(www.error);
        }
        //Otherwise 
        else {
            Debug.Log("POST complete! " + www.downloadHandler.text);
        }
    }
}

