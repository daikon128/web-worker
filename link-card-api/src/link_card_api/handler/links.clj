(ns link-card-api.handler.links
    (:require [ataraxy.response :as response]
              [integrant.core :as ig]))

;(defmethod ig/init-key ::list [_ _]
;  (fn [_]
;    [::response/ok {:message "OK!!"}]))