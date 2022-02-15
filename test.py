import json
import boto3
from decimal import Decimal

dynamodb = boto3.resource("dynamodb")
table = dynamodb.Table("bevy")


def lambda_handler(event, context):
    if event["rawPath"] != "/updateValue":
        return {"statusCode": 400, "errorMessage": "Wrong Lambda function for request"}
    body = json.loads(event["body"])
    address = body["address"]
    lake = body["lake"]
    timestamp = body["timestamp"]
    field = body["field"]
    value = body["value"]

    if field not in ["currency", "hypothPnl", "realPnl", "lastUpdate"]:
        return {
            "statusCode": "400",
            "body": {"error": "you messed up!"},
            "headers": {
                "Content-Type": "application/json",
            },
        }

    if field in ["hypothPnl", "realPnl"]:
        value = Decimal(value)
    if field in ["lastUpdate"]:
        value = int(value)
    response = table.update_item(
        Key={"address": address, "lake-timestamp": lake + "-" + str(timestamp)},
        UpdateExpression=f"set info.{field}=:v",
        ExpressionAttributeValues={
            ":v": value,
        },
        ReturnValues="UPDATED_NEW",
    )
    return response
